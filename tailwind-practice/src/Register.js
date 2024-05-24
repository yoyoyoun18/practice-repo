import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-roboto">
      <div className="max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-center">회원가입</h1>
        {/* 이미지 div 추가 */}
        <div
          className="w-24 h-24 mb-4 mx-auto rounded-full bg-center bg-cover cursor-pointer"
          style={{
            backgroundImage:
              "url('https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9JDV/image/FQtSFWM_1h2TEwr0SgUqvE5X0ds.JPG')",
          }}
        >
          이 미 지
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="text"
              id="name"
              placeholder="아이디 입력"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="email"
              id="email"
              placeholder="이메일 주소"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="비밀번호 재입력"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              회원가입
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/login"
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            이미 계정이 있으신가요? 로그인
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
