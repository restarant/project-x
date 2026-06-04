import { MOCK_ORDERS, MOCK_SIDEBAR, MOCK_STATS } from "@/data/landing";
import { cn } from "@/lib/cn";
import styles from "./DashboardMockup.module.css";

const STATUS_CLASS = {
  served: styles.statusOk,
  billing: styles.statusCook,
  pending: styles.statusPend,
} as const;

const STATUS_LABEL = {
  served: "Served",
  billing: "Billing",
  pending: "Pending",
} as const;

export function DashboardMockup() {
  return (
    <div className={styles.wrap}>
      <div className={styles.chrome}>
        <div className={styles.dots} aria-hidden>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <p className={styles.url}>restro-mate.app — Dashboard</p>
        <div className={styles.badge}>RM</div>
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarBrand}>
            <div className={styles.sidebarIcon}>🍽</div>
            <span className={styles.sidebarName}>Restro</span>
          </div>
          {MOCK_SIDEBAR.map((item) => (
            <div key={item.label} className={cn(styles.sidebarItem, item.active && styles.active)}>
              {item.label}
            </div>
          ))}
        </aside>

        <div className={styles.main}>
          <div className={styles.stats}>
            {MOCK_STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={cn(styles.statChange, stat.trend === "up" ? styles.up : styles.down)}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span className={styles.tableTitle}>Live Orders</span>
              <span className={styles.liveBadge}>● LIVE</span>
            </div>
            <div className={styles.tableRowHead}>
              {["Order", "Type", "Amount", "Items", "Status"].map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className={styles.tableRow}>
                <span>{order.id}</span>
                <span>{order.type}</span>
                <span>{order.amount}</span>
                <span>{order.items}</span>
                <span className={STATUS_CLASS[order.status]}>{STATUS_LABEL[order.status]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
