import React from 'react';
function proflie() {
    return (
        <>
            <div>
                <div className="avatar">
                    <img className="images" src="https://i.pinimg.com/originals/76/b3/51/76b351ffa72d83d305a255f0f7b80508.png" />
                </div>
                <div className="container_box">
                    <div className="follower">
                        <p>ผู้ติดตาม: 80k คน</p>
                        <p>กำลังติดตาม: 10 คน</p>
                    </div>
                    <div className="container_profile">
                        <h1>ป้าแก้ว บุญนำมา</h1>
                        <p>วันเกิด 29 กรกฏาคม พ.ศ.2505</p>
                        <p>คำอธิบายตัวเอง...................</p>

                    </div>
                    <div className="container_profile">
                        <p>บทความ
                        <span>บทความที่ 1 </span>
                            <span>บทความที่ 2 </span>
                            <span>บทความที่ 3 </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default proflie;