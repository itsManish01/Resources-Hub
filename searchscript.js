
const openpage =()=>{
    let s =document.getElementById("myInput").value.toUpperCase();
    if(s=='NOTES' || s=='NOTE' || s=='STUDY STUFF' || s=='STUDYSTUFF' || s=="STUDY"){
        window.open('DjNotes.html');
    }else if(s=='QUERY' || s=='ASK QUERY' || s=='DOUBT'){
        window.open('Djquery.html');
    }else if(s=='CODE' || s=='CODING' || s=='CODES'){
        window.open('DjCoding.html');
    }else if(s=='HOME'  || s=='MAIN' ){
        window.open('#');
    }else if(s=='CLUB' || s=='CLUBS' || s=='SOCIETY' || s=='SOCIETIES'){
        window.open('DJclubs.html');
    } else if(s=='CAMPUS' || s=='CAMP' || s=='CAMPUS VISIT' || s=='COLLEGE VISIT'){
        window.open('DJCampus.html');
    }else if(s=='ABOUTUS' ||s=='ABOUT US' ||s=='ABOUT'){
        window.open('DJAboutUs.html');
    }else if(s=='EVENT' || s=='EVENTS' || s=='UPDATES' || s=='FEST'|| s=='LIVE EVENT' ||s=='LIVE EVENTS'  ){
        window.open('Djupdates.html');
    }else if(s=='CONTACT' || s=='CONTACTUS' ||s=='CONTACT US'){
        window.open('DJContact.html');
    }else if(s=='SERVICES' || s=='SERVICE'){
        window.open('DJindex.html');
    }else if(s=='MATHS' || s=='MATHS NOTES' ||  s=='PHYSICS NOTES' || s=='PHYSICS' ||  s=='PHY NOTES' || s=='PHY'  || s=='MATHEMATICS' || s=='MATHEMATICS NOTES'){
        alert("Also specify part 1 or 2");
    }///////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='CHEM NOTES' || s=='CHEMISTRY NOTES' ){
        window.open('/Chem/DJchemNotes.html');
    }else if(s=='CHEM BOOKS' || s=='CHEMISTRY BOOKS'  || s=='CHEM BOOK' || s=='CHEMISTRY BOOK'){
        window.open('/Chem/DJchemBook.html');
    }else if(s=='CHEM LAB' || s=='CHEMISTRY LAB' || s=='CHEM TUTORIALS'|| s=='CHEMISTRY TUTORIALS'){
        window.open('/Chem/DJchemT.html');
    }else if(s=='CHEM PYQ' || s=='CHEMISTRY PYQ' || s=='CHEM PYQS' || s=='CHEMISTRY PYQS' ){
        window.open('/Chem/DJchemPYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='CS NOTES' || s=='COMPUTER SCIENCE NOTES' || s=='CS NOTE'){
        window.open('/CS/DJcsNotes.html');
    }else if(s=='CS BOOKS' || s=='COMPUTER SCIENCE BOOKS' || s=='CS BOOK'){
        window.open('/CS/DJcsBook.html');
    }else if(s=='CS PYQS' || s=='COMPUTER SCIENCE PYQS' || s=='CS PYQ' || s=='COMPUTER SCIENCE PYQ'){
        window.open('/CS/DJcsPYQ.html');
    }else if(s=='CS ASSIGNMENTS' || s=='COMPUTER SCIENCE ASSIGNMENTS' || s=='CS ASSIGNMENT' || s=='COMPUTER SCIENCE ASSIGNMENT' || s=='CS TUTORIAL' || s=='COMPUTER SCIENCE TUTORIAL'  || s=='CS TUTORIALS' || s=='COMPUTER SCIENCE TUTORIALS'){
        window.open('/CS/DJcsT.html');
    }////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='CSW NOTES' || s=='COMMUNICATION NOTES' ){
        window.open('/CSW/DJcswNotes.html');
    }else if(s=='CSW BOOKS' || s=='COMMUNICATION BOOKS'  || s=='CSW BOOK' || s=='COMMUNICATION BOOK'){
        alert("No such file");
    }else if(s=='CSW LAB' || s=='COMMUNICATION LAB' || s=='CSW TUTORIALS'|| s=='COMMUNICATION TUTORIALS'){
        alert("No such file");
    }else if(s=='CSW PYQ' || s=='COMMUNICATION PYQ' || s=='CSW PYQS' || s=='COMMUNICATION PYQS' ){
        window.open('/CSW/DJcswPYQ.html');
    }//////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='CHEM NOTES' || s=='CHEMISTRY NOTES' ){
        window.open('/Chem/DJchemNotes.html');
    }else if(s=='CHEM BOOKS' || s=='CHEMISTRY BOOKS'  || s=='CHEM BOOK' || s=='CHEMISTRY BOOK'){
        window.open('/Chem/DJchemBook.html');
    }else if(s=='CHEM LAB' || s=='CHEMISTRY LAB' || s=='CHEM TUTORIALS'|| s=='CHEMISTRY TUTORIALS' || s=='CHEM EXP' || s=='CHEMISTRY EXPERIMENTS'){
        window.open('/Chem/DJchemT.html');
    }else if(s=='CHEM PYQ' || s=='CHEMISTRY PYQ' || s=='CHEM PYQS' || s=='CHEMISTRY PYQS' ){
        window.open('/Chem/DJchemPYQ.html');
    }////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='MATHS 1 NOTES' || s=='MATHEMATICS 1 NOTES' ){
        window.open('/Maths1/DJmaths1Notes.html');
    }else if(s=='MATHS 1 BOOKS' || s=='MATHEMATICS 1 BOOKS'  || s=='MATHS 1 BOOK' || s=='MATHEMATICS 1 BOOK'){
        window.open('/Maths1/DJmaths1Book.html');
    }else if(s=='MATHS 1 TUT' || s=='MATHEMATICS 1 TUT' || s=='MATHS 1 TUTORIALS'|| s=='MATHEMATICS 1 TUTORIALS'){
        window.open('/Maths1/DJmaths1T.html');
    }else if(s=='MATHS 1 PYQ' || s=='MATHEMATICS 1 PYQ' || s=='MATHS 1 PYQS' || s=='MATHEMATICS 1 PYQS' ){
        window.open('/Maths1/DJmaths1PYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='MATHS 2 NOTES' || s=='MATHEMATICS 2 NOTES' ){
        window.open('/Maths2/DJmaths2Notes.html');
    }else if(s=='MATHS 2 BOOKS' || s=='MATHEMATICS 2 BOOKS'  || s=='MATHS 2 BOOK' || s=='MATHEMATICS 2 BOOK'){
        window.open('/Maths2/DJmaths2Book.html');
    }else if(s=='MATHS 2 TUT' || s=='MATHEMATICS 2 TUT' || s=='MATHS 2 TUTORIALS'|| s=='MATHEMATICS 2 TUTORIALS'){
        window.open('/Maths2/DJmaths2T.html');
    }else if(s=='MATHS 2 PYQ' || s=='MATHEMATICS 2 PYQ' || s=='MATHS 2 PYQS' || s=='MATHEMATICS 2 PYQS' ){
        window.open('/Maths2/DJmaths2PYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='PHY 1 NOTES' || s=='PHYSICS 1 NOTES' ){
        window.open('/PHY1/DJphy1Notes.html');
    }else if(s=='PHY 1 BOOKS' || s=='PHYSICS 1 BOOKS'  || s=='PHY 1 BOOK' || s=='PHYSICS 1 BOOK'){
        window.open('/PHY1/DJphy1Book.html');
    }else if(s=='PHY 1 TUT' || s=='PHYSICS 1 TUT' || s=='PHY 1 TUTORIALS'|| s=='PHYSICS 1 TUTORIALS'){
        window.open('/PHY1/DJphy1T.html');
    }else if(s=='PHY 1 PYQ' || s=='PHYSICS 1 PYQ' || s=='PHY 1 PYQS' || s=='PHYSICS 1 PYQS' ){
        window.open('/PHY1/DJphy1PYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='PHY 2 NOTES' || s=='PHYSICS 2 NOTES' ){
        window.open('/PHY2/DJphy2Notes.html');
    }else if(s=='PHY 2 BOOKS' || s=='PHYSICS 2 BOOKS'  || s=='PHY 2 BOOK' || s=='PHYSICS 2 BOOK'){
        window.open('/PHY2/DJphy2Book.html');
    }else if(s=='PHY 2 LAB' || s=='PHYSICS 2 LAB' || s=='PHY 2 TUTORIALS'|| s=='PHYSICS 2 TUTORIALS' || s=='PHY EXP' || s=='PHYSICS EXPERIMENTS'){
        window.open('/PHY2/DJphy2T.html');
    }else if(s=='PHY 2 PYQ' || s=='PHYSICS 2 PYQ' || s=='PHY 2 PYQS' || s=='PHYSICS 2 PYQS' ){
        window.open('/PHY2/DJphy2PYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='EG NOTES' || s=='ED NOTES'  ) {
        window.open('/EG/DJegNotes.html');
    }else if(s=='EG BOOKS' || s=='ED BOOKS'  || s=='EG BOOK' || s=='ED BOOK'){
        window.open('/EG/DJegBook.html');
    }else if(s=='EG LAB' || s=='ED LAB' || s=='EG TUTORIALS'|| s=='ED TUTORIALS' || s=='EG MATERIALS'|| s=='ED MATERIALS'){
        window.open('/EG/DJegT.html');
    }else if(s=='EG PYQ' || s=='ED PYQ' || s=='EG PYQS' || s=='ED PYQS' ){
        window.open('/EG/DJegPYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='EM NOTES' || s=='MECHANICS NOTES' ){
        window.open('/EM/DJemNotes.html');
    }else if(s=='EM BOOKS' || s=='MECHANICS BOOKS'  || s=='EM BOOK' || s=='MECHANICS BOOK'){
        window.open('/EM/DJemBook.html');
    }else if(s=='EM LAB' || s=='MECHANICS LAB' || s=='EM TUTORIALS'|| s=='MECHANICS TUTORIALS' || s=='EM ASSIGNMENTS'|| s=='MECHANICS ASSIGNMENTS'){
        window.open('/EM/DJemT.html');
    }else if(s=='EM PYQ' || s=='MECHANICS PYQ' || s=='EM PYQS' || s=='MECHANICS PYQS' ){
        window.open('/EM/DJemPYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='WORKSHOP NOTES' || s=='WS NOTES' ){
        window.open('/workshop/DJwsNotes.html');
    }else if(s=='WORKSHOP BOOKS' || s=='WS BOOKS'  || s=='WORKSHOP BOOK' || s=='WS BOOK'){
        window.open('/workshop/DJwsBook.html');
    }else if(s=='WORKSHOP LAB' || s=='WS LAB' || s=='WORKSHOP TUTORIALS'|| s=='WS TUTORIALS' ||  s=='WS ASSIGNMENTS'|| s=='WORKSHOP ASSIGNMENTS'){
        window.open('/workshop/DJwsT.html');
    }else if(s=='WORKSHOP PYQ' || s=='WS PYQ' || s=='WORKSHOP PYQS' || s=='WS PYQS' ){
        window.open('/workshop/DJwsPYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(s=='ENGLISH NOTES' || s=='ENG NOTES' || s=='LANGUAGE NOTES'  || s=='ENGLISH LITERATURE' || s=='ENG LITERATURE'){
        window.open('/ENG/DJengNotes.html');
    }else if(s=='ENGLISH BOOKS' || s=='ENG BOOKS'  || s=='ENGLISH BOOK' || s=='ENG BOOK' || s=='LANGUAGE BOOK'){
        alert("No such file");
    }else if(s=='ENGLISH LAB' || s=='ENG LAB'|| s=='ENGLISH MATERIALS' || s=='ENG MATERIALS' || s=='ENGLISH TUTORIALS'|| s=='ENG TUTORIALS' || s=='LANGUAGE '){
        window.open('/ENG/DJengT.html');
    }else if(s=='ENGLISH PYQ' || s=='ENG PYQ' || s=='ENGLISH PYQS' || s=='ENG PYQS' ){
        window.open('/ENG/DJengPYQ.html');
    }/////////////////////////////////////////////////////////////////////////////////////////////////////
    else{
        alert("Please be more specific and also ensure correct spelling : ) ");
    }

}

