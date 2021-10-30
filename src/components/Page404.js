import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return(
    <div>
      <p>ページが見つかりません</p>
      {/* ページが見つからないんだからLinkを貼って、homeに移動させてあげるのが親切 */}
      <Link to="/">Topに戻る</Link>
      {/* "/"ルートに戻る */}
    </div>
  )
}

export default Page404;