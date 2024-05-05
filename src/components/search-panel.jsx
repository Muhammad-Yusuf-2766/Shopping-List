import React from 'react'

class SearchPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
		}
	}

	onChange = e => {
		const value = e.target.value

		this.setState({ search: value })
		this.props.onChangeSearch(value)
	}

	render() {
		return (
			<input
				type='text'
				className='search'
				onChange={this.onChange}
				placeholder='Search...'
			/>
		)
	}
}

export default SearchPanel
