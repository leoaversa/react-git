
import Button from 'react-bootstrap/Button';


function Modales() {
    return(
    <div className="modal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <Button type="Button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </Button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <Button type="Button" className="btn btn-primary">Save changes</Button>
          <Button type="Button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
        </div>
      </div>
    </div>
  </div>
    )}


export default Modales