README
Instructions to setup and run INSURANCE DASHBOARD
-Unzip Folder
-cd [Saved Folder Name]
-npm install
-npm run dev 

Utilized UseState to manage form input values, validation states, focus states and error messages. Also used useEffect to set focus to the username field on mount using userRef Validate the username and password inputs in real-time using regex patterns, updating the validation state whenever the input changes. Clear error messages whenever the user modifies either the username or password fields to improve UX.
useRef was used to automatically focus on the username field when the component was mounted, helping with usability by guiding the user  and errorRef was used to set focus on the error message when the form is submitted with invalid inputs. This improves accessibility by drawing attention to the error.
Used User_Regx and Password_Regex to validate the username and password, passwords should contain symbols, numbers, uppercase letter and also must be more.
A mock user object is used to simulate user authentication. This is not production code, but for testing. If the credentials are correct, it calls setGlobalUserName from the context API to set a global state for the logged-in username and navigates to the Dashboard page using navigate.
aria-labelledby, aria-describedby, and aria-live, ARIA attributes improve accessibility by providing descriptive text for screen readers.
The useEffect hook is used to fetch data from a mock API in this case, once the component mounts an asynchronous function that uses fetch to make a GET request to the API, if the request is successful, it updates the  state with the data received if an error occurs during the fetching process, the errMsg state is set to the error message, which is displayed in the UI. 
Expiring Policies are retrieved by Filtering the list of policies to find those that are expiring in the next 1 to 8 months. This is achieved using the differenceInCalendarMonths function from the date-fns library to calculate the number of months between the current date and the policy's expiration date
The Link component from React Router is used to create navigation links. Extracting the Policy ID from URL with useParams from React Router is used to extract the id parameter from the URL. This ID is used to fetch specific data related to the selected policy from the external API


# insurancedashboard
