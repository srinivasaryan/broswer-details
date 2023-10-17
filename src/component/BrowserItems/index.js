import './index.css'

const BrowserItems = props => {
  const {browserDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-items">
      <div className="list-elements">
        <p className="paragraph-time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image-logo" />
        <p className="paragraph-title ">{title}</p>
        <p className="paragraph-domain"> {domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="button-icon"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default BrowserItems
