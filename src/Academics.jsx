import React from 'react'

const Academics = () => {
  return (
    <> 
    <div className="x ml-[17vw]"> 
   
      <div className="attendance flex justify-center  w-[80vw] ml-[2vw] ">
      <div className="heading text-center mt-6 text-2xl bg-blue-900 h-[7vh]  text-white font-mono p-2 rounded-md">Attendance Records</div>
      
    </div>
    
    <div className="line bg-gray-500 h-[1px] w-[75vw] ml-[3vw] mt-4 "></div>
    
    <div className="card border-4 shadow-gray-500 shadow-xl border-white bg-gray-200 w-[75vw] h-[70vh] ml-[3vw] mt-6 p-2">
      <div className="box1 text-2xl text-center">Term: 
        <select name="" id="" className="term text-xl ml-3 font-mono">
          <option>1st Semester</option>
          <option>2nd Semester</option>
          <option>3rd Semester</option>
          <option>4th Semester</option>
        </select>
      </div>

      <div className="box2">
        <h2 className='mt-4 text-lg'>Overall attendance: 64%</h2>
        <h2 className='mt-4 text-lg'>Overall attended Sessions: 127/200</h2>
      </div>


      <div className="box-3">
        <div className="sub1 h-12 mt-2 bg-gray-400 ">
          <div className="x flex justify-around p-2">
          <div className="name">Microprocessors and Interface</div>
          <div className="attendance">
            <h2>Attendance : 50%</h2>
            </div>
          </div>
          <div/>
        </div>
</div>

<div className="box-3">
        <div className="sub1 h-12 mt-2 bg-gray-400 ">
          <div className="x flex justify-around p-2">
          <div className="name">Deep Learning</div>
          <div className="attendance">
            <h2 className='ml-28'>Attendance: 64 %</h2>
            </div>
          </div>
          <div/>
        </div>
</div>

<div className="box-3">
        <div className="sub1 h-12 mt-2 bg-gray-400 ">
          <div className="x flex justify-around p-2">
          <div className="name">Compiler Design</div>
          <div className="attendance">
            <h2 className='ml-24'>Attendance: 70 %</h2>
            </div>
          </div>
          <div/>
        </div>
</div>

<div className="box-3">
        <div className="sub1 h-12 mt-2 bg-gray-400 ">
          <div className="x flex justify-around p-2">
          <div className="name">Cloud Computing and Storage Management</div>
          <div className="attendance">
            <h2 className='mr-8'>Attendance : 80% </h2>
            </div>
          </div>
          <div/>
        </div>
</div>

<div className="box-3">
        <div className="sub1 h-12 mt-2 bg-gray-400 ">
          <div className="x flex justify-around p-2">
          <div className="name">Operations Research</div>
          <div className="attendance">
            <h2 className='ml-20'>Attendance: 75 %</h2>
            </div>
          </div>
          <div/>
        </div>
</div>



    </div>
    </div>
    </>

  )
}

export default Academics
