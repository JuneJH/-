import api from '@/server/api';
import styles from './index.less';

export default function IndexPage() {
  api.getTest().then(res=>{
    console.log(res)
  })
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
