function deleteRow(rownum) {
    // table element 찾기
    const table = document.getElementById('room1');
    
    // 행(Row) 삭제
    const newRow = table.deleteRow(rownum);
  }

 jQuery(document).ready(function(){
    //sido option 추가
    jQuery.each(hangjungdong.sido, function(idx, code){
      //append를 이용하여 option 하위에 붙여넣음
      jQuery('#sido').append(fn_option(code.sido, code.codeNm));
    });
   
    //sido 변경시 시군구 option 추가
    jQuery('#sido').change(function(){
      jQuery('#sigugun').show();
      jQuery('#sigugun').empty();
      jQuery('#sigugun').append(fn_option('','구')); //
      jQuery.each(hangjungdong.sigugun, function(idx, code){
        if(jQuery('#sido > option:selected').val() == code.sido)
          jQuery('#sigugun').append(fn_option(code.sigugun, code.codeNm));
      });
   
      //세종특별자치시 예외처리
      //옵션값을 읽어 비교
      if(jQuery('#sido option:selected').val() == '36'){
        jQuery('#sigugun').hide();
        //index를 이용해서 selected 속성(attr)추가
        //기본 선택 옵션이 최상위로 index 0을 가짐
        jQuery('#sigugun option:eq(1)').attr('selected', 'selected');
        //trigger를 이용해 change 실행
        jQuery('#sigugun').trigger('change');
      }
    });
   
    //시군구 변경시 행정동 옵션추가
    jQuery('#sigugun').change(function(){
      //option 제거
      jQuery('#dong').empty();
      jQuery.each(hangjungdong.dong, function(idx, code){
        if(jQuery('#sido > option:selected').val() == code.sido && jQuery('#sigugun > option:selected').val() == code.sigugun)
          jQuery('#dong').append(fn_option(code.dong, code.codeNm));
      });
      //option의 맨앞에 추가
      jQuery('#dong').prepend(fn_option('','동'));
      //option중 선택을 기본으로 선택
      jQuery('#dong option:eq("")').attr('selected', 'selected');
   
    });
   
    jQuery('#dong').change(function(){
      var sido = jQuery('#sido option:selected').val();
      var sigugun = jQuery('#sigugun option:selected').val();
      var dong = jQuery('#dong option:selected').val();
      var dongCode = sido + sigugun + dong + '00';    
    });
  });
   
  function fn_option(code, name){
    return '<option value="' + code +'">' + name +'</option>';
  }
  

  const reader = new FileReader();

reader.onload = (readerEvent) => {
    document.querySelector("#img_section").setAttribute("src", readerEvent.target.result);
    //파일을 읽는 이벤트가 발생하면 img_section의 src 속성을 readerEvent의 결과물로 대체함
};


document.querySelector("#upload_file").addEventListener("change", (changeEvent) => {
    //upload_file 에 이벤트리스너를 장착

    const imgFile = changeEvent.target.files[0];
    reader.readAsDataURL(imgFile);
    //업로드한 이미지의 URL을 reader에 등록
})

  
