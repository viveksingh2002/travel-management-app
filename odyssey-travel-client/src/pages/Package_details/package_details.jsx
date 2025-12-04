
import './package_details.css';

function package_details()
{
    return(
    <div>
        <div className="container">
            <div className="header my-3 fw-bolder fs-1"><b>Package Details</b></div>
            <div class="mb-3 my-3">
                <label htmlFor="PackageTitle" className="form-label fw-bolder">Package Title</label>
                <input type="text" className="form-control" id="PackageTitle" placeholder="Explore Manali in 7 Days" />
            </div>
        <div class="mb-3">
            <label htmlFor="Description" className="form-label fw-bolder">Description</label>
            <textarea className="form-control" id="Description" rows="3" placeholder="Discover the magic of manali"></textarea>
        </div>

        <div class="row my-3">

            <div className="col">
                <label htmlFor="Destination" className="form-label fw-bolder">Destination</label>
                <input type="text" className="form-control" placeholder="Manali,Himachal" aria-label="Destination" />
            </div>
            <div className="col">
                <label htmlFor="Price(Rupee)" className="form-label fw-bolder">Price(Rupee)</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest Ruppes)" />
                    <span className="input-group-text">.00</span>
                </div>
            </div>
        
        </div>

        <div class="row my-3">

            <div class="col">
                <label for="Start_Date" className="form-label fw-bolder">Start Date</label>
                <input type="date" className="form-control" aria-label="Destination" />
            </div>

            <div class="col">
                <label for="End_Date" className="form-label fw-bolder">End Date</label>
                <input type="date" className="form-control" placeholder="End_Date" aria-label="End_Date" />
            </div>
        </div>
           
        
        <div class="row my-3">

            <div className="col">
                <label htmlFor="Max_travellers" className="form-label fw-bolder">Maximum Travellers</label>
                <input type="text" className="form-control" placeholder="20" aria-label="Maximum Travellers" />
            </div>


            <div className="col">
                <label htmlFor="Status" className="form-label fw-bolder">Status</label>
                <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
        {/* Package img */}
        <div className="package_img my-4">
        <div className="header my-3 fw-bolder">Package Images</div>
        <div className="box">
            <h2 className="header">
                Drag and Drop Files
            </h2>
        </div>
        </div>
        </div>

        {/* itineray */}

        
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
<div class="container mt-3">
    {/* 1st itenary */}
    <div className="header my-3 fw-bolder">Iternary</div>
  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <span class="bg-body border">1</span>
    </div>
    <div class="col">
      <div class="input-group">
        <textarea class="form-control" rows="3" placeholder="Enter text here..."></textarea>
        <button class="btn btn-transparent" type="button">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <span class="bg-body border">2</span>
    </div>
    <div class="col">
      <div class="input-group">
        <textarea class="form-control" rows="3" placeholder="Enter text here..."></textarea>
        <button class="btn btn-transparent" type="button">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <span class="bg-body border">3</span>
    </div>
    <div class="col">
      <div class="input-group">
        <textarea class="form-control" rows="3" placeholder="Enter text here..."></textarea>
        <button class="btn btn-transparent" type="button">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</div>

{/* buttons */}

<div class="d-flex justify-content-end gap-3 my-5">
  <button type="button" class="btn btn-danger">Cancel</button>
  <button type="button" class="btn btn-primary">Save as Draft</button>
  <button type="button" class="btn btn-success">Submit to Admin for Review</button>
</div>
        </div>
    </div>
    )
}

export default package_details