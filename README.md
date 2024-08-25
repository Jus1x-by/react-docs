# How to start
Install all dependencies `pnpm i`
Start app `pnpm dev`

To run test: `pnpm test`
To check coverage: `pnpm coverage`

### Building the Core Components
The next step involved creating the core components of the application. I structured the application into several key components:
HomePage: This component serves as the main view for both user types. It displays the user's recent documents and conditionally renders the "Career Goal" section for Managed Users.
PersonalPage: This component responsibly for users via id_personal = false organization flag. Based on it will be rendered documents list
ManagedPage: This component responsibly for users via id_personal = true organization flag. Based on it will be displayed 'Career Goal' component
### Ensuring Scalability
To ensure the SPA is scalable, I followed best practices in component design and architecture. Each component was built to be reusable and modular, making it easy to add new features or modules in the future. For example, the DocumentList component can be extended to include filtering or sorting options without significant changes to the existing codebase. I also used a context provider for state management, allowing for easy integration of additional user-related features as needed.
### Implementing User Context
To manage user data and authentication state, I implemented a context provider using React's Context API. This allowed me to share user information and authentication methods (like logout) across the application without prop drilling. The AppStateContext provided a centralized way to manage user data, ensuring that both the UserManageDropdown and PersonalPage, ManagedPage, Greetings could access the necessary user information.
### Handling User Types
I implemented conditional rendering within the HomePage component to differentiate between Managed Users and Personal Users. By checking the user type from the context, I was able to display the additional "Career Goal" section for Managed Users. This required careful attention to the user data structure to ensure the correct information was displayed.
### Implementing Logout Functionality
The logout functionality was implemented in the UserManageDropdown component. When the user clicks the logout option, the application calls the logout method from the context, which updates the authentication state and redirects the user to the home page. I used React Router's useNavigate hook to facilitate this navigation seamlessly.
### Testing the Application
To ensure the application met all requirements and functioned correctly, I wrote comprehensive tests using Vitest and React Testing Library. I aimed for at least 80% code coverage across the application, focusing on meaningful tests that validate both component rendering and user interactions. This step was crucial to validate that the application behaved as expected for both user types.

## What can be done
### Accessibility
* Add aria-label attributes to buttons: This provides a descriptive label for screen readers, making it easier for users to understand the purpose of each button.
* Ensure all images have meaningful alt attributes: Alt text should describe the content and purpose of each image, enabling screen readers to convey the information to users.
* Conduct thorough accessibility testing: Utilize tools like Lighthouse or WAVE to identify and address accessibility issues, such as contrast ratios, keyboard navigation, and screen reader compatibility.

### Perfomance
* Memoize responses: Utilize memoization techniques to cache the results of expensive computations or API calls. This can significantly reduce the need for redundant calculations and improve overall performance.
* Reduce unnecessary re-renders: Implement optimizations like React.memo or useMemo hooks to prevent unnecessary re-renders of components when their props haven't changed. This can help minimize the impact of state updates on the component tree.
* Implement caching from the API: Set up caching mechanisms on the server-side to reduce the number of API calls and improve response times. This can be achieved by leveraging HTTP caching headers or implementing a caching layer in the API itself.
* Compress SVG assets: Optimize the size of SVG icons and images by compressing them using tools like SVGO. Smaller file sizes lead to faster loading times and improved overall performance.

### Scalability
* Utilize a state management library: Adopt a state management library like Effector or MobX to manage the application's state in a centralized and scalable manner. These libraries provide powerful state management capabilities, making it easier to handle complex state scenarios and share data across components.
* Utilize a component library: Consider adopting a well-established component library like Material-UI or Ant Design. These libraries provide a wide range of pre-built, customizable components that adhere to best practices and design guidelines. By leveraging these components, you can accelerate development and ensure consistency across the application.