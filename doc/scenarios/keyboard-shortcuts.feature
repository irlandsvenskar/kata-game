Feature: Use keyboard shortcuts to progress through an exercise

  Scenario: Enter to start an exercise
    Given: Student is on the start page
    When: Student presses the enter key
    Then: Student sees the page for the first task

  Scenario: Enter to complete a task
    Given: Student is on a task page
    And: The current task is not the last task in the exercise
    When: Student presses the enter key
    Then: Student sees the page for the next task

  Scenario: Enter to complete an exercise
    Given: Student is on a task page
    And: The current task is the last task in the exercise
    When: Student presses the enter key
    Then: Student sees the exercise summary page
