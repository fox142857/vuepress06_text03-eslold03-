# OBM - OutBound Management

## Project Overview

OBM (OutBound Management) is a desktop application developed based on Java for ESL (Electronic Shelf Label) information entry and management. The system achieves fast and accurate data collection and storage by connecting to barcode scanner devices, greatly improving work efficiency.

## Technology Stack

- **Frontend Framework**: JavaFX
- **Backend Development**: Java 11
- **Database**: MySQL 5.7+
- **ORM Framework**: MyBatis
- **Build Tool**: Maven
- **Packaging Tools**:
  - JLink (Java module packaging)
  - Launch4j (Generating exe files)
  - InnoSetup (Creating installers)

## Main Features

### 1. Data Collection
- Support for multiple models of barcode scanners
- Real-time data entry
- Automatic data validation
- Batch data processing

### 2. Data Management
- Data query and filtering
- Data export functionality
- History tracking
- Data backup and recovery

### 3. User Management
- Multi-level user permissions
- Operation log recording
- User behavior analysis

### 4. System Configuration
- Database connection configuration
- Barcode scanner device configuration
- System parameter settings
- Interface theme customization

## System Architecture

```
OBM
├── UI Layer (JavaFX)
│   ├── Main Interface
│   ├── Data Entry
│   ├── Data Management
│   └── System Settings
├── Business Layer
│   ├── Data Processing
│   ├── Business Logic
│   └── Device Control
├── Persistence Layer (MyBatis)
│   ├── Data Access
│   └── Cache Management
└── Database (MySQL)
    └── Data Storage
```

## Project Features

1. **Efficiency**
   - Fast data entry
   - Batch processing capability
   - Optimized database operations

2. **Reliability**
   - Real-time data backup
   - Exception handling mechanism
   - Transaction management

3. **Usability**
   - Intuitive user interface
   - Simple operation process
   - Comprehensive help documentation

4. **Extensibility**
   - Modular design
   - Plugin architecture
   - Configuration-based development

## Deployment Requirements

### Hardware Requirements
- CPU: Dual-core or above
- Memory: 4GB or above
- Hard Disk: 500MB available space
- USB interface (for connecting barcode scanners)

### Software Requirements
- Windows 7/8/10/11 64-bit
- JRE 11 or higher
- MySQL 5.7 or higher

## Future Plans

1. **Feature Enhancement**
   - Support for more types of scanning devices
   - Addition of data analysis functions
   - Optimization of data export formats

2. **Performance Optimization**
   - Improve large data volume processing capability
   - Optimize memory usage
   - Increase response speed

3. **User Experience**
   - Interface beautification
   - Workflow optimization
   - Multi-language support

## Technical Support

- Documentation Center: [OBM Documentation](/en/docs/OBM/)
- Issue Feedback: [GitHub Issues](https://github.com/your-repo/OBM/issues)
- Technical Support: support@example.com 