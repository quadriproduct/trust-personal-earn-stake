import React from 'react';
import PersonalNav from '../../components/PersonalNav';
import HelpLogo from "../../assets/images/help.png";
import AnnouncementLogo from "../../assets/images/announcement.png";
import AssetTable from '../../components/AssetTable';
import IncomeTable from '../../components/IncomeTable';

export default function PersonalHome() {
	return (
    <>
      <PersonalNav />
      <section className="m-4">
        <div class="row">
          <div class="col-8">
            <div className="row">
              <div className="col">
                <div class="card border-0 card_shadow bg-primary">
                  <div class="card-body p-4 text-white">
                    <div className="mb-3">Total Income Value <span className="ms-3 text-info"><i class="bi bi-caret-down-fill"></i></span></div>
                    <div><i class="bi bi-arrow-up-right"></i> +3.49%</div>
                    <p className="h3 fw-normal mt-2 mb-2">$15,000</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card border-0 card_shadow">
                  <div class="card-body p-4 text-dark">
                    <div className="mb-3">Your Tax  <span className="ms-3 text-info"><i class="bi bi-caret-down-fill"></i></span></div>
                    <p className="mb-0 text-primary"><i class="bi bi-arrow-up-right"></i> +2.75%</p>
                    <p className="h3 fw-normal mt-2 mb-2">$2,500</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-0 card_shadow mt-4">
              <div class="card-body">
                <div className="row">
                  <div className="d-flex">
                    <p>Your Income Source</p>
                    <div className="ms-auto d-flex align-items-center">
                      <p className="text-primary fw-semibold text-nowrap mb-0">Download Reports <i class="bi bi-download"></i></p>
                      <select class="form-select ms-4 border-0" aria-label="timeline">
                        <option selected>Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <IncomeTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border-0 card_shadow h-100">
              <div class="card-body p-4 text-dark">
                <div>Create or Edit Income Yield</div>
                <div className="d-flex flex-column mb-5">
                  <button type="button" class="btn btn-outline-primary mt-3 mb-3">Select wallet or income stream source</button>
                  <button type="button" class="btn btn-outline-primary mb-3">Select yield protocol: Aave, APWINE</button>
                  <button type="button" class="btn btn-outline-primary mb-3">%Allocation</button>
                  <button type="button" class="btn btn-outline-primary mb-3">Currency: USDC, DAI, USDT</button>
                </div>
                <div className="d-flex flex-column mx-auto w-75">
                  <button type="button" className="btn btn-primary px-3 text-white">
                    Submit
                  </button>
                  <button type="button" className="btn btn-primary px-3 text-white mt-3">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CREATE AN INVOICE  */}
        <div class="row mt-4">
          <div className="col-8">
            <div class="card border-0 card_shadow">
              <div class="card-body">
                <div className="row">
                  <p>Your Asset</p>
                  <div className="col-2"></div>
                  <div>
                    <AssetTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 h-100">
              <div className="card-body card_shadow">
                <p>Help Center</p>
                <div className="d-flex justify-content-center">
                  <img src={HelpLogo} width={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
	);
}
