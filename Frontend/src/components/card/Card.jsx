import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ necklace, ring, bracelet, earing }) => {
    return (
        <>
            {
                necklace ? (
                    <Link to={`/necklaces/details/${necklace._id}`}>
                    <div class="card">
                        <img src={necklace.necimagea} class="card-img-top object-cover" alt="Hollywood Sign on The Hill" width={'100px'} height={'220px'} />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title text-black">{necklace.necname}</h5>
                                <h5 class="card-title text-black">NPR.{necklace.necprice}</h5>
                            </div>
                            <hr />
                            <p className="text-black">
                                {necklace.necdescription}
                            </p>
                            <button className="btn w-100 btn-outline-black">
                                View more
                            </button>
                        </div>
                    </div>
                    </Link>
                ) : ring ? (
                    <Link to={`/rings/details/${ring._id}`}>
                    <div class="card">
                        <img src={ring.ringimagea} class="card-img-top object-cover" alt="Earings" width={'100px'} height={'220px'} />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title text-black">{ring.ringname}</h5>
                                <h5 class="card-title text-black">NPR.{ring.ringprice}</h5>
                            </div>
                            <hr />
                            <p className="text-black">
                                {ring.ringdescription}
                            </p>
                            <button className="btn w-100 btn-outline-black">
                                View more
                            </button>
                        </div>
                    </div>
                    </Link>
                ) : bracelet ? (
                    <Link to={`/bracelets/details/${bracelet._id}`}>
                    <div class="card">
                        <img src={bracelet.bracimagea} class="card-img-top object-cover" alt="Earings" width={'100px'} height={'220px'} />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title text-black">{bracelet.bracname}</h5>
                                <h5 class="card-title text-black">NPR.{bracelet.bracprice}</h5>
                            </div>
                            <hr />
                            <p className="text-black">
                                {bracelet.bracdescription}
                            </p>
                            <button className="btn w-100 btn-outline-black">
                                View more
                            </button>
                        </div>
                    </div>
                    </Link>
                ) : earing ? (
                    <Link to={`/earings/details/${earing._id}`}>
                    <div class="card">
                        <img src={earing.earimagea} class="card-img-top object-cover" alt="Earings" width={'100px'} height={'220px'} />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title text-black">{earing.earname}</h5>
                                <h5 class="card-title text-black">NPR.{earing.earprice}</h5>
                            </div>
                            <hr />
                            <p className="text-black">
                                {earing.eardescription}
                            </p>
                            <button className="btn w-100 btn-outline-black">
                                View more
                            </button>
                        </div>
                    </div>
                    </Link>
                ) : null
            }
        </>
    )
}

export default Card