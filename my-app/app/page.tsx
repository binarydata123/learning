"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { checkout } from "./checkout";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>app/page.tsx</code>
                </p>
                <div>
                    <div>
                        <Image
                            src="/images/images.jpeg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={500}
                            height={204}
                            priority
                        />
                        <button onClick={() => {
                            checkout({
                                lineItems: [
                                    {
                                        price: "price_1OtS5TSCtYQgyLlmvkD4wxn9",
                                        quantity: 1
                                    }
                                ]
                            });
                        }}>Buy!</button>
                    </div>
                </div>
            </div>

            <div className={styles.grid}></div>
        </main>
    );
}
