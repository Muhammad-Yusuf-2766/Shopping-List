import React from 'react'

class ShoppingAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			number: '',
		}
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number,
		}
		if (!data.number.length && !data.title.length) {
			alert('All fields should be completed!')
		} else {
			this.props.onAdd(data)
		}
	}

	render() {
		return (
			<div className='form'>
				<input
					type='text'
					className='title'
					placeholder='Title'
					onChange={this.onChange}
					name='title'
					required
				/>
				<input
					type='number'
					className='nymber'
					placeholder='13'
					onChange={this.onChange}
					name='number'
					required
				/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}

export default ShoppingAddForm
