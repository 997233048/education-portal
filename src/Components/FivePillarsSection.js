import React from 'react';
import pilar1 from "../image/pilar-1.jpg"
import pilar2 from "../image/pilar-2.jpg"
import pilar3 from "../image/pilar-3.jpg"
import pilar4 from "../image/pilar-4.jpg"
import pilar5 from "../image/pilar-5.jpg"
const FivePillarsSection = () => {
  return (
    <section className="section" data-id="c3b0019" data-element_type="section">
      <div className="container">
        <div className="elementor-row">
          <div className="" data-element_type="column">
            <div className="">
              <div className="elementor-widget-wrap">
                {/* Title Widget */}
                <div className="" data-id="111fde8" data-element_type="widget" data-widget_type="tmx-almanar_title.default">
                  <div className="elementor-widget-container">
                    <div className="wpo-section-title">
                      <span>Islam Pillars </span><h2>Five Pillars Of Islam</h2>
                    </div>
                  </div>
                </div>

                {/* Pillars Widget */}
                <div className="" data-id="" data-element_type="widget" data-widget_type="tmx-almanar_pilars.default">
                  <div className="elementor-widget-container">
                    <div className="pilars-area ">
                      <div className="fluid-container">
                        <div className="row-grid">
                          {/* Pillar Item 1 */}
                          <div className="grid" data-scroll-reveal="enter bottom move 50px over 1.0s after 0.2s">
                            <div className="pilars-item">
                              <div className="pilarts-img">
                                <img src={pilar1} alt="" />
                              </div>
                              <div className="pilars-text">
                                <h2>Shahadah</h2>
                              </div>
                            </div>
                          </div>

                          {/* Pillar Item 2 */}
                          <div className="grid" data-scroll-reveal="enter bottom move 50px over 1.0s after 0.4s">
                            <div className="pilars-item">
                              <div className="pilarts-img">
                                <img src={pilar2} alt="" />
                              </div>
                              <div className="pilars-text">
                                <h2>Salah</h2>
                              </div>
                            </div>
                          </div>

                          {/* Pillar Item 3 */}
                          <div className="grid" data-scroll-reveal="enter bottom move 50px over 1.0s after 0.6s">
                            <div className="pilars-item">
                              <div className="pilarts-img">
                                <img src={pilar3} alt="" />
                              </div>
                              <div className="pilars-text">
                                <h2>Sawm</h2>
                              </div>
                            </div>
                          </div>

                          {/* Pillar Item 4 */}
                          <div className="grid" data-scroll-reveal="enter bottom move 50px over 1.0s after 0.8s">
                            <div className="pilars-item">
                              <div className="pilarts-img">
                                <img src={pilar4} alt="" />
                              </div>
                              <div className="pilars-text">
                                <h2>Zakah</h2>
                              </div>
                            </div>
                          </div>

                          {/* Pillar Item 5 */}
                          <div className="grid" data-scroll-reveal="enter bottom move 50px over 1.0s after 1.0s">
                            <div className="pilars-item">
                              <div className="pilarts-img">
                                <img src={pilar5} alt="" />
                              </div>
                              <div className="pilars-text">
                                <h2>Hajj</h2>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarsSection;
