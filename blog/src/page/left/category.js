import React, { Component } from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class category extends Component {
  constructor(props) {
    super(props)
    this.state = {
        category: [],
        edit: false,
    }
  }

  componentDidMount(){
      this._getCategoryData();
  }

  _getCategoryData = async function(){
      const getData = await axios('/get/category');
      this.setState({category: getData.data})
  }

  _addCategory = async function(){
    let category_name = window.prompt('추가할 카테고리의 이름을 입력해주세요')
    if(!category_name){
      return;  
    }
    category_name = category_name.trim();
    if(category_name !== '' && category_name.length > 0){
      const add = await axios('/add/category',{
        method:'POST',
        data: {name:category_name},
        headers: new Headers()
      })

      alert(add.data.msg);
      this._getCategoryData(); // 리스트 재구성
      this.setState({edit: false})
    }else{
      return alert('최소 1글자 이상이어야 합니다')
    }
 }

 _removeCategory = async function(category){
   if(window.confirm(category.name + ' 카테고리를 삭제하겠습니까?')){
      const remove= await axios('/delete/category',{
        method: 'POST',
        data: category,
        headers: new Headers()
      })

      if(remove){
        this._getCategoryData();
        this.setState({edit: false})
      }
   }
 }

 _modifyCategory = async function(category){
   let modify_name = document.getElementsByName('modify_' + category.id)[0].value;
   if(modify_name){
    modify_name = modify_name.trim();
  }
   if(modify_name !== '' && modify_name.length>0){
    if(window.confirm(category.name + ' 의 이름을 \n' + modify_name + ' 으로 수정하시겠습니까?')) {
      const data = { id : category.id, name : modify_name }
      const modfy = await axios('/modify/category', {
        method : 'POST',
        data : data,
        headers: new Headers()
      })
      alert(modfy.data.msg);
      this._getCategoryData();
      this.setState({edit: false})
    }
   } else{
     return alert('최소 1글자 이상이어야 합니다')
   }
 }

  render() {
    const {category} = this.state;
    const {_changeCategory} = this.props;
    const { login } = this.props;
    const {edit} = this.state;
    let pre_cat = '';
    if(sessionStorage.getItem('category')){
        pre_cat = Number(sessionStorage.getItem('category'));
    }

    return (
        <div className='Category'>
          <ul>
            <li> <Link 
            className={pre_cat === ''? "pre_cat" : null}
            to='/' 
            onClick={()=>_changeCategory('')}> 전체 보기 </Link> 
            {login ? !edit ? <input type='button' value='Edit' className='Edit' onClick={() => this.setState({ edit : !edit })}/>
                           : <input type='button' value='Add' className='Edit' onClick={()=>this._addCategory()}/> 
             : null}
            <hr /></li>
            {category.length > 0 ? 
              category.map( (el, key) => {
                if(!edit){
                  return(
                    <li key={key}> 
                    <Link
                    className={pre_cat === el.id? "pre_cat" : null} 
                    to='/' onClick ={()=> _changeCategory(el.id)}> {el.name} </Link> </li>
                    )
                } else{
                  return(
                    <li key={key}>
                      <img 
                        src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-x-mark-2.png&r=0&g=0&b=0'
                        className='remove_icon'
                        onClick={()=>this._removeCategory(el)}
                      /> 
                      <input type='text' maxLength='20' className='edit_input' defaultValue={el.name} name={'modify_'+el.id}/>
                      <img 
                      src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-check-mark-17.png&r=0&g=0&b=0'
                      className='modify_icon'
                      onClick={()=>this._modifyCategory(el)}
                      /> 
                    </li>
                  )
                }
                
              })
          : null }
          </ul>
        </div>
    );
  }
}

export default category;