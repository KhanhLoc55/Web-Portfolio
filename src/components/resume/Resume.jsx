import React from "react";
import "./resume.scss";

import GoogleUxDesign from "../../assets/resume/GoogleUxDesign.pdf";
import MetaFrontEnd from "../../assets/resume/MetaFrontEnd.pdf";

const Resume = () => {
  // You can use useState or useEffect hooks if you need state or side effects

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-title">
          <h2 className="resume-heading">Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>about me</h4>
              <div>
                <p>
                  Tôi tên là Nguyễn Khánh Lộc. Vào tháng 8 năm 2021, tôi bắt đầu
                  học và dành phần lớn thời gian hàng ngày để thiết kế giao
                  diện. Tôi đã tìm hiểu trên trang web nổi tiếng Coursera và
                  hoàn thành hai khóa học quan trọng là "UX Design by Google" và
                  "Front-End Meta Course".
                </p>
                <p>
                  Năm 2022, tôi tiếp tục tìm hiểu về việc viết mã để thực hiện
                  các ý tưởng thiết kế của mình. Mỗi ngày, tôi say mê học hỏi và
                  thực hành kỹ năng thiết kế web.
                </p>
                <p>
                  Mục tiêu của tôi là theo đuổi sự nghiệp trong lĩnh vực thiết
                  kế web. Tôi muốn tạo ra những trang web đẹp mắt, tương tác và
                  mang lại trải nghiệm tuyệt vời cho người dùng. Tôi sẽ tiếp tục
                  nâng cao kiến thức và kỹ năng của mình để trở thành một chuyên
                  gia phát triển web.
                </p>
              </div>
              <ul>
                <li className="resume__aboutMe-item">
                  <span className="resume__aboutMe-text">Điện Thoại:</span>{" "}
                  <em>0839 851 729</em>
                </li>
                <li className="resume__aboutMe-item">
                  <span className="resume__aboutMe-text">Gmail:</span>{" "}
                  <em>anhlamot55@gmail.com</em>
                </li>
                <li className="resume__aboutMe-item">
                  <span className="resume__aboutMe-text">
                    Trang thiết kế websie:
                  </span>{" "}
                  <em>
                    <a
                      href="https://www.behance.net/anhlamot55"
                      target="__blank"
                    >
                      behance.net
                    </a>
                  </em>
                </li>
                <li className="resume__aboutMe-item">
                  <span className="resume__aboutMe-text">
                    Trang front-end websie:
                  </span>{" "}
                  <em>
                    <a href="https://github.com/KhanhLoc55" target="__blank">
                      github.com
                    </a>
                  </em>
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <h4>Google UX Design</h4>
              <h5>8/2021 - 2/2022</h5>
              <p>
                <em>Được chứng nhận bởi coursera</em>
              </p>
              <ul>
                <li>
                  Certifications:{" "}
                  <a download="GoogleUxDesign.pdf" href={GoogleUxDesign}>
                    Google Ux Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Meta Front-End Developer</h4>
              <h5>7/2022 - 1/2023</h5>
              <p>
                <em>Được chứng nhận bởi coursera</em>
              </p>
              <ul>
                <li>
                  Certifications:{" "}
                  <a download="GoogleUxDesign.pdf" href={MetaFrontEnd}>
                    Meta Front-End Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Freelancer</h4>
              <h5>10/2022 - hiện nay</h5>
              <p>
                <em>- nhận các dự án và làm việc trực tiếp từ khách hàng.</em>
              </p>
              <p>
                <em>
                  - luyện kỹ năng, tự học nâng cao trình độ và làm các dự án cá
                  nhân.
                </em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Công Ty Tnhh Tmdv Quảng Cáo Lá Đỏ</h4>
              <h5>10/2019 - 9/2022</h5>
              <p>
                <em>
                  - Làm việc trực tiếp với sếp để lên hình ảnh view cho khách
                  hàng xem.
                </em>
              </p>
              <p>
                <em>- Đo kích thước kệ, bảng hiệu,... để làm ra sản phẩm.</em>
              </p>
              <p>
                <em>
                  - Phụ trách làm các đơn đặt hàng, báo giá, biên bản nghiệm
                  thu.
                </em>
              </p>
              <p>
                <em>
                  - Tiến hành làm file, xuất file, kiểm tra chất lượng file in
                  ấn thiết kế.
                </em>
              </p>
              <p>
                <em>- Thực hiện các quy trình của công ty.</em>
              </p>
              <p>
                <em>- Hoành thành tốt công việc được giao.</em>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Cao đẳng Công nghệ Kỹ thuật Cơ điện tử</h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>Tốt nghiệp chuyên ngành cơ điện tử.</em>
              </p>
              <p>
                <em>Đạt được Chứng chỉ tin học + Tiếng anh.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
