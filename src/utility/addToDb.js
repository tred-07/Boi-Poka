const getStoreReadList=()=>{
    const storedListStr=localStorage.getItem("read-list")
    if(storedListStr){
        const storedList=JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}



const addToStoreReadList=(id)=>{
    const storedList=getStoreReadList()
    if(storedList.includes(id)){
        alert("already exist")
        console.log("already exist");
    }
    else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
    }
}


export {addToStoreReadList,getStoreReadList}