import styles from "./footer.module.css";
import Image from "next/image";
export function Footer() {
    return (
       <div className={styles.item3}>
       <footer className={styles.footer}>
        <section className={styles.footersection}>
          <div className={styles.footeritem1}>
            <strong>Tổng Đài Hỗ Trợ</strong>
            <ul>
              <li>
                <span>Hotline:</span>
                <a href="#">0123456789</a>
              </li>
            </ul>
          </div>
          <div className={styles.footeritem2}>
            <strong>Về Công Ty</strong>
            <ul>
                  <li>Giới thiệu công ty</li>
                  <li>Tuyến dụng</li>
                  <li>Gửi góp ý, khiếu nại</li>
                  <li>Tìm siêu thị (2961 shop)</li>
                </ul>
          </div>
          <div className={styles.footeritem3}>
            <strong>Thông Tin Khác</strong>
            <ul>
                  <li>Tích điểm Quà tặng VIP</li>
                  <li>Lịch sử mua hàng</li>
                  <li>Đăng ký bán hàng CTV chiết khấu cao</li>
                  <li>Tìm hiểu về mua trả chậm</li>
                  <li>Xem thêm</li>
                </ul>
            </div>
          <div className={styles.footeritem4}>Web Cùng Tập Đoàn</div>
        </section>
        <div className={styles.copyright}>
          copyright
        </div>
      </footer>
      </div>
    )
}
