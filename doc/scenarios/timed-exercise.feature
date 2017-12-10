Feature: Complete an exercise consisting of a series of tasks, with each task being timed

  Scenario: Before beginning an exercise
    Given Student has an exercise available
    When Student visits the landing page for the exercise
    Then Student sees instructions for the starting conditions for the exercise
    And Student sees a start button

  Scenario: Start an exercise
    Given Student is on the start page
    When Student presses the start button
    Then Student sees instructions for the first task
    And Student sees a done button

  Scenario: Complete a task
    Given Student has completed the current task
    When Student presses the done button
    Then Student sees instructions for the next task
    And Student sees the time for the previous task
    And Student sees the done button for the new task

  Scenario: Complete an exercise
    Given Student has completed the current task
    And The current task is the final task in the exercise
    When Student presses the done button
    Then Student sees the times for all the tasks
    And Student sees the total time for the exercise
