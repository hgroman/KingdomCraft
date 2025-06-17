# IDE and System Tools

This document outlines the standard tools used in the KingdomCraft project.

## Standard Tooling

- **Integrated Development Environment (IDE):** The project is designed to be worked on within a modern IDE that supports standard file operations, terminal access, and language support for Markdown, YAML, JavaScript, and MJML. Examples include VS Code or Cursor.
- **Version Control:** Git is used for version control. Standard Git commands and workflows are expected.
- **Node.js & npm:** Required for MJML CLI and any other Node-based project scripts. Assumed to be installed and accessible.
- **MJML CLI:** The official MJML command-line interface is used for compiling MJML source files into HTML. (`npm install mjml`)

## AI Assistant Capabilities

The AI assistant (Cascade) utilizes its built-in system tools for tasks such as:
- File system navigation and manipulation (listing directories, reading/writing files, moving files).
- Code searching and viewing.
- Running terminal commands (with user approval for potentially non-safe operations).
- Web searching for research and documentation.

No specialized or project-specific external tools are required for the AI assistant at this time.

## Future Considerations

If any project-specific tools, scripts (beyond the legacy build system now archived), or unique configurations are introduced, they will be documented here.
