import styles from './gioithieu.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function GioiThieu() {
    return (
        <div className={styles.gioithieu}>
            <h1>Giới thiệu về công ty</h1>
            <p>
                Công ty chúng tôi được thành lập vào năm 2010 với mục tiêu trở thành một trong những công ty hàng đầu trong lĩnh vực kinh doanh TRANG SỨC.
                Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang lại cho khách hàng những sản phẩm và dịch vụ tốt nhất.
            </p>
        </div>
    )
}
