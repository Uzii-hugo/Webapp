import {Link} from 'react-router-dom';
function Home(){
          return(
                    <>
                              <nav>
                                        <h3>หน้ารายการ</h3>
                              </nav>
                              <div className="container">
                              <div className="finding">
                              ค้นหาจาก
                                        <Link to="/addProject">
                                                  <button type="button"> เพิ่มโครงการ </button>
                                        </Link>
                              </div>
                              </div>
                              <div className="serach">
                                        <input type="text" placeholder="กรอกข้อความที่ต้องการค้นหา"/>
                                        <button type="button"> ค้นหาโครงการ </button>
                                        <button type="button" className="reset"> เริ่มใหม่</button>
                                        <button type="button" className="del">ลดเงื่อนไขการค้นหา</button>
                              </div >
                              <div className="sort">
                                        <label>
                                        จังหวัด:
                                                  <select name="county">
                                                            <option value="none">-- โปรดเลือก --</option>
                                                            <option value="กรุงเทพ">กรุงเทพ</option>
                                                            <option value="เชียงใหม่">เชียงใหม่</option>
                                                            <option value="พัทยา">พัทยา</option>
                                                            <option value="ขอนแก่น">ขอนแก่น</option>
                                                  </select>
                                        </label>
                                        <label>
                                        ประเภท:
                                                  <select type="type">
                                                            <option value="none">-- โปรดเลือก --</option>
                                                            <option value="กรุงเทพ">ปรับปรุงขนส่ง</option>
                                                            <option value="เชียงใหม่">พัฒนาป่า</option>
                                                  </select>
                                        </label>
                              </div>
                              <div className="tableContainer">
                              <table className="table">
                                        <caption>รายการโครงการ</caption>
                                        <thead> 
                                                  <tr>
                                                            <th scope="col">ลำดับ</th>
                                                            <th scope="col">ชื่อโครงการ</th>
                                                            <th scope="col">ประเภท</th>
                                                            <th scope="col">จังหวัด</th>
                                                            <th scope="col">ภาค</th>
                                                            <th scope="col">เริ่มต้น</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <th scope="row">1</th>
                                                            <td>ปรับปรุงจราจรห้วยขว้าง</td>
                                                            <td>ปรับปรุงระบบขนส่ง</td>
                                                            <td>กรุงเทพมหานคร</td>
                                                            <td>กลาง</td>
                                                            <td>23/5/2562</td>
                                                  </tr>
                                                  <tr>
                                                            <th scope="row">2</th>
                                                            <td>ปรับปรุงจราจรห้วยขว้าง</td>
                                                            <td>ปรับปรุงระบบขนส่ง</td>
                                                            <td>เชียงใหม่</td>
                                                            <td>กลาง</td>
                                                            <td>23/5/2562</td>
                                                  </tr>
                                        </tbody>
                              </table>
                              </div>
                    </>
                    
          )
}

export default Home;

