# MDE - MySQL Data Exporter

## Project Overview

MDE (MySQL Data Exporter) is a database export tool developed based on Python, supporting the export of data from MySQL databases in multiple formats. The tool provides a simple and intuitive graphical interface with flexible configuration options, making it a powerful assistant for database management and data analysis work.

## Technology Stack

- **Development Language**: Python 3.8+
- **Database**: MySQL 5.7+
- **GUI Framework**: PyQt5
- **Data Processing**: Pandas
- **Packaging Tool**: PyInstaller

## Main Features

### 1. Database Connection
- Support for configuration files and interface configuration
- Encrypted storage of connection parameters
- Support for switching between multiple databases
- Connection status monitoring

### 2. Data Export
- Support for TXT format export
- Support for XLSX format export
- Custom export fields
- Conditional filtering for export

### 3. Export Configuration
- Character encoding settings
- Delimiter selection
- Export path configuration
- File naming rules

### 4. Task Management
- Export task queue
- Batch export support
- Task progress display
- Error log recording

## System Architecture

```
MDE
├── UI Layer (PyQt5)
│   ├── Main Window
│   ├── Configuration Interface
│   └── Progress Display
├── Business Layer
│   ├── Database Operations
│   ├── Data Processing
│   └── File Export
└── Configuration Management
    ├── Connection Configuration
    └── Export Settings
```

## Project Features

1. **Ease of Use**
   - Graphical operation interface
   - Foolproof configuration
   - Simple operation steps

2. **Flexibility**
   - Multiple export formats
   - Custom export configuration
   - Batch processing support

3. **Reliability**
   - Exception handling mechanism
   - Automatic retry functionality
   - Comprehensive log recording

4. **Efficiency**
   - Optimized query performance
   - Batch data processing
   - Multi-task parallel support

## Deployment Requirements

### Hardware Requirements
- CPU: Any x86_64 processor
- Memory: 2GB or above
- Hard Disk: 200MB available space

### Software Requirements
- Windows 7/8/10/11
- MySQL 5.7 or higher
- No Python environment required (already packaged)

## Use Cases

1. **Data Migration**
   - Database migration preparation
   - Data backup
   - Cross-system data conversion

2. **Data Analysis**
   - Export data for analysis
   - Report generation
   - Data statistics

3. **System Integration**
   - Interface with other systems
   - Data exchange
   - Batch data processing

## Future Plans

1. **Feature Extension**
   - Support for more export formats
   - Addition of data preview
   - Support for more database types

2. **Performance Optimization**
   - Enhance large data processing capability
   - Optimize memory usage
   - Improve export speed

3. **User Experience**
   - Interface beautification
   - Add export templates
   - Quick operation support

## Technical Support

- Documentation Center: [MDE Documentation](/en/docs/MDE/)
- Issue Feedback: [GitHub Issues](https://github.com/your-repo/MDE/issues)
- Technical Support: support@example.com 