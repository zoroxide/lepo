@echo off
REM Check if the first argument is "install"
IF "%1"=="install" (
    REM Run setup project function
    call :setupProject
) ELSE IF "%1"=="create" (
    REM Check if the second argument is "new" and the third argument is "project"
    IF "%2"=="new" IF "%3"=="project" (
        REM Run create new project function with the fourth argument as project name
        call :createNewProject %4
    ) ELSE (
        echo Invalid usage: lepo create new project <project-name>
        exit /b 1
    )
) ELSE (
    echo Usage: lepo install OR lepo create new project <project-name>
    exit /b 1
)
exit /b 0

REM Function to setup the project
:setupProject
REM Add commands to set up the project here
echo Setting up the project...
echo Project setup completed successfully!
exit /b 0

REM Function to create a new project
:createNewProject
REM Add commands to create a new project here
echo Creating new project: %1
echo Project '%1' created successfully!
exit /b 0
lepo.bat