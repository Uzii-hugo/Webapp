function addProject(){
          return(
                    <>
                              <nav>
                                        <h3>หน้าเพิ่ม/แก้ไขข้อมูล</h3>
                              </nav>
                              <div className="container">
                                        <h3 className="title">ข้อมูลโครงการ</h3>
                                        <div className="form-group">
                                                  <label>ชื่อโครงการ
                                                            <input type="text" className="form-control" />
                                                  </label>
                                                  <label>รายละเอียด
                                                            <in type="text" rows="10" cols="80" name="content"/>
                                                  </label>
                                                  <label>จังหวัด
                                                            <select name="county">
                                                                      <option value="none">-- โปรดเลือก --</option>
                                                                      <option value="กรุงเทพ">กรุงเทพ</option>
                                                                      <option value="เชียงใหม่">เชียงใหม่</option>
                                                                      <option value="พัทยา">พัทยา</option>
                                                                      <option value="ขอนแก่น">ขอนแก่น</option>
                                                            </select>
                                                  </label>
                                                  <label>ประเภท
                                                            <select type="type">
                                                                      <option value="none">-- โปรดเลือก --</option>
                                                                      <option value="กรุงเทพ">ปรับปรุงขนส่ง</option>
                                                                      <option value="เชียงใหม่">พัฒนาป่า</option>
                                                            </select>
                                                  </label>
                                                  <label className="date">เริ่ม
                                                            <input type="date" className="form-control"/>
                                                  </label >
                                                  <label className="date"> สิ้นสุด
                                                            <input type="date" className="form-control"/>
                                                  </label>
                                                  <label>งบประมาณ
                                                            <input type="text" className="form-control"/>
                                                  </label>
                                                  <label>มีงบสนับสนุนอื่น
                                                            <input type="text" className="form-control"/>
                                                  </label>
                                                  <label>ลักษณะโครงการ
                                                            <input type="text" className="form-control"/>
                                                  </label>

                                        </div>

                              </div>
                    </>
          )
}

export default addProject;