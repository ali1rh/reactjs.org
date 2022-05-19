# tips

Lifecycle of Components

constructor(props){super(props)} 		// #Mounting		
getDerivedStateFromProps(props, state)		// #Mounting&Updating	This is the natural place to set the state object based on the initial props.&This is still the natural place to set the state object based on the initial props.
shouldComponentUpdate(){return false;}		// #Updating		The default value is true.  you can return a Boolean value that specifies whether React should continue with the Updating or not.
render()					// #Mounting&Updating		required
componentDidMount()				// #Mounting		This is where you run statements that requires that the component is already placed in the DOM.
getSnapshotBeforeUpdate(prevProps, prevState)	// #Updating		you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
componentDidUpdate()				// #Updating		called after the component is updated in the DOM.
componentWillUnmount()				// #Unmounting		

