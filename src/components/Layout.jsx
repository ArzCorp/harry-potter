export default function Layout({ children }) {
	return (
		<main className="layout">
			<section className="layout__container">{children}</section>
		</main>
	)
}
