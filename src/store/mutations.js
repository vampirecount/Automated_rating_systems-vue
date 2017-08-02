import * as types from './types'

const mutations = {
	[types.LOGIN]: (state, data) => {

    sessionStorage.setItem('token', data)

		// localStorage.token = data
		state.token = data

	},
	[types.LOGOUT]: (state) => {

    sessionStorage.removeItem('token');

    sessionStorage.removeItem('username');

		state.token = null

		state.username = ''

	},
	[types.USERNAME]: (state, data) => {

    sessionStorage.setItem('username', data)

		state.username = data

	}
}

export default mutations
