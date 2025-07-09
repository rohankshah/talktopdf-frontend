export const host = 'http://localhost:3001'

export const rootRoute = '/api'

export const paths = {
	embedPdf: '/pdf/embed',
}

export const getFullUrl = (path: string) => `${host}${rootRoute}${path}`
