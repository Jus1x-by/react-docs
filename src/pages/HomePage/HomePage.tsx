import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-page" data-testid="home-page">
      <a href="/personal">Personal Page</a>
      <a href="/managed">Managed Page</a>
    </div>
  )
}