import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
    return (
        <header className={styles.header}> 
      <h1 className={styles.h1}>Trang Chủ</h1>
      <nav className={styles.nav}>
        <ul>
        <li>
          <Link href="/">Trang Chủ</Link>
          </li>
          <li><Link href="/gioithieu">Giới Thiệu</Link></li>
          <li><Link href="/chitietsanpham">Chi Tiết</Link></li>
          <li><Link href="/lienhe">Liên Hệ</Link></li>
        </ul>
      </nav>

      </header>
    )
}
