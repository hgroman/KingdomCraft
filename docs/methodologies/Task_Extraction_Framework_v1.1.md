# Task Extraction Framework

## Purpose
This framework standardizes the extraction of tasks from meeting transcripts, ensuring consistent categorization and documentation of action items.

## Task Categories

### Primary Categories
1. **Content**
   - Content creation & writing
   - Content editing & review
   - Publishing & distribution
   - Asset creation & management

2. **Technical**
   - Website updates & maintenance
   - System & platform optimization
   - Tool development & fixes
   - Performance improvements

3. **Client Management**
   - Client meetings & calls
   - Client communications
   - Review cycles & approvals
   - Relationship management

4. **Strategy**
   - Analytics & reporting
   - Marketing & campaign planning
   - Competitive analysis
   - Performance strategy

5. **Administrative**
   - Internal organization
   - Documentation
   - Team coordination
   - Process management

## Task Field Requirements

### Mandatory Fields
| Field | Description | Format/Rules |
|-------|-------------|--------------|
| Meeting Date | Date of meeting or interaction | YYYY-MM-DD (Must be extracted from transcript) |
| Task Title | Begin with action verb | "Review content" not "Content review" |
| Category | Primary category | Select from 5 categories above |
| Status | Current state | [Planned/In Progress/Completed/Ongoing] |
| Assigned To | Team member(s) | Individual or team name |
| Due Date | Completion date | YYYY-MM-DD or 'UNDEFINED' |
| Hours | Time allocation | Decimal: 0.25, 0.5, 0.75, 1.0, etc. |
| Client Name | Associated client | Client name or 'UNDEFINED' |
| Project Name | Associated project | Project name or 'UNDEFINED' |
| Notes | Context & details | Key information, dependencies, requirements |

### Field Rules

1. **Task Title Rules**
   - MUST start with action verb
   - Be specific and clear
   - Include deliverable if applicable
   - Example: "Create blog post" not "Blog post"
   - For meetings: "Attend [meeting type]" not "Meeting"

2. **Category Selection**
   - Choose dominant category
   - For multi-category tasks, select primary focus
   - When unclear, default to broader category

3. **Status Definitions**
   - Planned: Scheduled, not started
   - In Progress: Currently active
   - Completed: Finished, no further action
   - Ongoing: Continuous or recurring

4. **Time Rules**
   - Round to nearest quarter hour (0.25)
   - Include prep and follow-up time
   - For meetings, include all participants' time
   - Use actual time if known, estimated if planned

5. **Client & Project Names**
   - Use consistent naming
   - Use 'UNDEFINED' if unclear
   - For internal work, use 'Internal' as client
   - Include client name whenever mentioned

6. **Notes Requirements**
   - Include context from transcript
   - Note dependencies or blockers
   - Record specific requirements
   - Include relevant deadlines
   - Reference related tasks

## CSV Output Format
```csv
Meeting Date,Task Title,Category,Status,Assigned To,Due Date,Hours,Client Name,Project Name,Notes
```

## Task Extraction Rules
1. Extract ALL explicit tasks
2. Use 'UNDEFINED' for unclear fields
3. Split compound tasks
4. Note task dependencies
5. Maintain consistent formatting

## Common Scenarios

1. **Group Meetings**
   - Create separate tasks for each attendee
   - Note shared responsibilities
   - Include meeting prep/follow-up

2. **Recurring Tasks**
   - Use 'Ongoing' status
   - Note frequency in Notes
   - Include next due date

3. **Multi-Person Tasks**
   - List all assignees
   - Note individual responsibilities
   - Track shared hours

4. **Project Tasks**
   - Link to project when mentioned
   - Note project phase
   - Include project context

## Quality Checks
- All tasks start with action verb
- All mandatory fields populated
- Consistent category usage
- Clear, specific Notes
- Proper date formatting
- Quarter-hour time increments
