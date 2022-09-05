import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoggedUserContext } from '../context/LoggedUserContext';
import { useUserDataContext } from '../context/UserDataContext'
import '../Style/Profile.css'


export const Profile = ()=>{
    const {userData} = useUserDataContext();
    const [selectedLine, setSelectedLine] = useState("order")
    const {isLoggedUser, setIsLoggedUser} = useLoggedUserContext();
    const navigate = useNavigate();

    return(
        <div className="profilePage">
            <div className='profileContainer'>
                <div className='profileLeft'>
                    <div>
                        <div className='profilePicture'>
                            <img src="https://itstore.mn/0f04d49243e7e0d1cf4d4c54b02baf06.svg" alt="" />
                        </div>
                        <div className='profileInfo'>
                            <h2>{userData.name}</h2>
                            <h3>{userData.email}</h3>
                        </div>
                    </div>
                    <div className='profileList'>
                        <ul>
                            <li onClick={()=>setSelectedLine("pro")} className={selectedLine === "pro" ? "lineActive": ""}>
                                Хувийн мэдээлэл
                            </li>
                            <li onClick={()=>setSelectedLine("order")} className={selectedLine === "order" ? "lineActive": ""}>
                                Миний захиалгууд
                            </li>
                            <li onClick={()=>{setIsLoggedUser(false); navigate('/')} }>
                                Гарах
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='profileRight'>
                    {selectedLine === "order" ? <div>
                        <h1>Миний захиалгууд</h1>
                        <div className='profileOrder'>
                            <div>
                                <p>Огноо</p>
                                <p>2022/09/04</p>
                            </div>
                            <div>
                                <p>Киноны нэр</p>
                                <p>SpiderMan</p>
                            </div>
                            <div>
                                <p>Эхлэх цаг</p>
                                <p>15:30</p>
                            </div>
                            <div>
                                <p>Суудлын тоо</p>
                                <p>4</p>
                            </div>
                            <div>
                                <p>Тасалбарын үнэ</p>
                                <p>30000₮</p>
                            </div>
                        </div>
                        <div className='profileOrder'>

                        </div>  
                    </div>: 
                    <div className='profileInfoContainer'>
                        <div>
                            <h1>Хувийн мэдээлэл</h1>
                        </div>
                        <div className='profileInfoLine'>
                            <div className='profileInfoLineDiv'>
                                <label htmlFor="">Нэр*</label>
                                <input type="text" placeholder={userData.name}/>
                            </div>
                            <div className='profileInfoLineDiv'>
                                <label htmlFor="">Утас*</label>
                                <input type="text" placeholder={userData.phone}/>
                            </div>
                        </div>
                        <div className='profileInfoLine'>
                            <div className='profileInfoLineDiv'>
                                <label htmlFor="">Имэйл*</label>
                                <input type="text" placeholder={userData.email} />
                            </div>
                            <div className='profileInfoLineDiv'>
                                <label htmlFor="">Нууц үг*</label>
                                <input type="text" placeholder='********'/>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}