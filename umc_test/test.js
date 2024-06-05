//test.js
import { addUser, getUser } from './src/models/user.dao.js'; // 모듈 경로에 맞게 수정하세요

// 테스트용 데이터
const testData = {
  email: "test@example.com2",
  name: "Test User2",
  gender: "Male",
  birth: "1990-01-01",
  addr: "Test Address",
  specAddr: "Test Specific Address",
  phone: "010-1234-5678",
  prefer: [1,3,5]
};

// 사용자 추가 테스트
const testAddUser = async () => {
  try {
    const userId = await addUser(testData);
    console.log("추가된 사용자 ID:", userId);
    
    if (userId !== -1) {
      // 사용자 정보 조회 테스트
      const user = await getUser(userId);
      console.log("조회된 사용자 정보:", user);
    } else {
      console.log("이미 존재하는 이메일입니다.");
    }
  } catch (error) {
    console.error("에러 발생:", error);
  }
};

testAddUser();
