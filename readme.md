- Fast
- Complete
- Reliable
- Isolated
- Maintainable
- Expressive

#### Characteristics of an Effective Test Suite
### Fast
As you learn more about tests in the context of full-stack web applications, you will find that some types of tests, called unit tests, are fast, while other tests, called integration tests, are slower. If your test suite contains a large collection of integration tests, and few unit tests, you may end up waiting a few minutes or even hours for your test suite to execute.

A fast test suite will provide feedback more quickly, and thus, make the development process more efficient than a slow test suite. Often, a developer who is trying to fix a bug will need to run the test suite multiple times to see if their implementation addresses the issue. If they work on the bug for two hours, and need to run the test suite five times, a test suite that takes thirty seconds to run will save 22 minutes over a test suite that takes five minutes to run — the difference can be this significant.

### Complete
A test suite that covers 100% of your codebase will catch any errors that arise from changing or adding code application. A complete test suite provides you with confidence that your software is working as expected. This characteristic can often run in conflict with building a fast test suite — as you investigate testing further, you will learn about strategies that help you optimize your test suite for speed and completeness.

### Reliable
A reliable test suite is one that provides consistent feedback, regardless of changes that may occur outside the scope of a given test. An unreliable test suite may have tests that fail intermittently, with no helpful feedback about changes you’ve made to your application.

If a developer is trying to address a bug in their codebase, they will need to run their test suite a few times to see if they’ve addressed the issue. What if they run the test suite two times in-a-row and don’t change their implementation, but receive different sets of failing tests? This is a sign that the developer’s test suite is unreliable. It’s like trying to hit a moving target — they can’t trust if their implementation is wrong or if their test suite is unreliable.

### Isolated
An isolated test suite contains tests that run without impacting other tests in the suite. This may require you to cleanup persisting data after you run a test in your suite.

For example, you may want to test whether your software properly writes to a database. You don’t want any changes to the database persisting outside of this test. If a change to the database does persist, it may cause unexpected behavior in a test that reads from the database.

### Maintainable
A maintainable test suite is easy to manipulate — you should be able to add, change, or remove tests with ease. If you don’t know how to add tests to run against new features, your test suite may become incomplete and ineffective.

The best way to keep your test suite maintainable is to be organized, follow coding best practices, and develop a consistent process that works for you and your team.

### Expressive
The easy-to-read nature of test suites make them a great form of documentation. You should always write code that is descriptive of the features you are testing.

You should try to build a test suite that is descriptive enough for another developer to read, and be able to fully understand the purpose of the web application. Also, because your test suite is part of your software, it is more likely to stay up-to-date than a README or documentation that isn’t a functional piece of the software.

# TDD

- Write The Test — Start with a test describing the functionality we’d like to see.
- Fail The Test — Write code in response to the test that fails.
- Pass The Test — The tests fail and communicate feedback to developers through error messages. It’s our responsibility to read those messages, then respond by writing the minimum amount of code to address those messages.
- Refactor Your Code — See below.

![image](./red-green-refactor-tdd.png)

## Helpful links

https://nodejs.org/api/assert.html#assertthrowsfn-error-message
