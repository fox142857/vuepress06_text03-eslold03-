# MySQL Database Export Tool User Manual

## Overview

The MySQL Database Export Tool is a graphical interface designed to connect to remote MySQL databases, query data from tables, and export the data in TXT or Excel formats. The tool supports field filtering, data preview, and batch export functionality.

## Configuration File Description

### Configuration File Structure

```
[Database]
host = localhost      # Database server address
port = 3306           # Database port
user = root           # Database username
password =            # Database password
database =            # Database name
table =               # Table name

[Export]
format = TXT          # Default export format; options: TXT, Excel
path = exporter       # Default export path, relative to the program’s execution directory

```

### Explanation of Configuration Items

#### Database Section

- **host**: The address of the MySQL database server. Defaults to localhost.
- **port**: The port of the MySQL database server. Defaults to 3306.
- **user**: The database username. Defaults to root.
- **password**: The database password.
- **database**: The name of the database to connect to.
- **table**: The table to export.

#### Export Section

- **format**: The default export format; options are TXT or Excel.
- **path**: The default export path, relative to the program’s execution directory.

## Usage Instructions

- After launching the program, first enter the database connection information in the configuration panel.
  - If a configuration file exists in the same directory, the program will load its information as the default configuration.
- Click the "Connect to Database" button to establish a connection.
  - You can verify the data’s accuracy in the data preview interface.
- Select the fields you wish to export from the field list.
  - Use the filtering function to refine the data if necessary.
- Choose the export format (TXT or Excel).
- Select a save location—using an absolute path is recommended.
- Click the "Export Data" button to export the data.

## Frequently Asked Questions

1. **Unable to connect to the database?**
   - Check if the database server is running properly.
   - Confirm that the host address and port number are correct.
   - Verify that the username and password are correct.
   - Ensure the database user has the necessary access permissions.
2. **Excel export failed?**
   - Make sure the openpyxl library is installed.
   - Check if the Excel file is currently being used by another program.
   - Ensure that the export path has write permissions.
3. **Data preview is empty?**
   - Confirm that the selected table contains data.
   - Check if the filtering conditions are too strict.
   - Verify that the correct fields have been selected.

## Technical Support

If you encounter any issues while using the tool, please refer to the documentation above. If the problem persists, please contact [Technical Support](mailto:fox142857@foxmail.com) for further assistance.