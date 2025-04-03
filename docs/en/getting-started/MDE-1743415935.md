# MDE Quick Start

## System Requirements

- Windows 7/8/10/11 operating system
- MySQL 5.7 or higher
- No need to install Python environment (already packaged in the program)

## Installation Steps

1. Download the latest version of the MDE executable
2. Extract the program to any directory
3. Run MDE.exe

## Configuring Database Connection

### Method 1: Configuration File

1. Create a `config.ini` file in the program directory
2. Fill in the following configuration information:
```ini
[database]
host = localhost
port = 3306
database = your_database
user = your_username
password = your_password
```

### Method 2: Program Interface Configuration

1. Start the program
2. Click the "Configure Database" button
3. Fill in the database connection information
4. Click "Test Connection" to verify
5. Save the configuration

## Exporting Data

1. Select the data table to export
2. Set query conditions (optional)
3. Select export format (TXT or XLSX)
4. Choose save location
5. Click the "Export" button

## Common Issues

### Database Connection Failure

- Check if the database service is running
- Verify that the connection information is correct
- Check network connection
- Confirm user permissions

### Export Failure

- Confirm that the selected save location has write permissions
- Check if disk space is sufficient
- View error logs for detailed information

## Technical Support

If you encounter issues during use, please:

1. Check the [Complete Documentation](/en/docs/MDE/)
2. Submit an [Issue](https://github.com/your-repo/MDE/issues)
3. Contact the technical support team 