React ke concepts jo ab tak cover kiye:

Concept	                    Explanation
                Todos
useState        	        Input tracking, todos state
useEffect       	        localStorage load/save
Custom Hook     	        useTodos() logic manage karta hai
Props	                    Parent → child communication
Components	                Reusable code blocks

                PomodoroTimer
useRef	                    intervalRef ko store karne ke liye
useState	                seconds left, isRunning
useEffect	                Clean-up function for unmount
Conditional Rendering	    Start/Pause button toggle
Component Composition	    TimerDisplay, TimerControls inside PomodoroTimer

                Dark/Light Theme
useContext              	Share global theme state
createContext	            Setup context provider
useEffect	                On page load, set theme
localStorage	            Store theme preference
Conditional rendering	    Icon + label toggle
Bootstrap v5.3	            Native dark mode support

                Notes
Feature	                    Library / Concept Used
Markdown rendering	        react-markdown
Live editor/preview	        Controlled inputs
PDF download	            html2pdf.js + ref
LocalStorage CRUD	        useState, useEffect
Title + Tags support	    Form, map
Multiple notes	            useState, id, list

                Habits
useReducer	                Advanced state handling (like Redux)
localStorage	            Persistent data
Controlled form input	    Input handling via React state
useEffect	                Lifecycle use — load/save from storage
Reusable UI (map)           Dynamically rendering data

                Tips
useEffect	                API call on component mount
useState	                Track loading, data, and error
Async/Await	                Handle API request-response
Conditional rendering	    Based on state (tip, loading, error)
Bootstrap Components	    Card, Spinner, Alert, Button

                Lazy
React.lazy	                Lazy import of big components
Suspense	                Show loading UI during async load
useState	                Trigger lazy loading on button click
Bootstrap	                For quick UI styling    

                Pagination
useState	                Track current page
slice()	                    Extract subset of list per page
Buttons logic	            Enable/disable Prev/Next navigation
Bootstrap styling	        Clean & responsive list UI
