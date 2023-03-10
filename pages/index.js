import { useForm } from "react-hook-form";
{
  /* Form validasyonlarını uygulayabilmek için kullandım. */
}
import InputMask from "react-input-mask";
{
  /* Mask işlemini doğru şekilde yapabilmek için kullandım. */
}
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  {
    /* Burada useForm hookunu kullanarak formları oluşturdum. */
  }

  const onSubmit = (data) => {
    localStorage.setItem("form-data", JSON.stringify(data));
    toast.success("Üye Oldunuz!");
    reset();
  };
  {
    /* Form doğru bir şekilde submit olduktan sonra formu localStorage'da tutuyorum. stringify ile nesneyi string formatına çevirerek tuttum. Son olarak inputların içini boşaltıyorum. */
  }
  return (
    <div className="w-full pt-10 flex justify-center bg-slate-700 min-h-screen">
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full w-1/3"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ad
          </label>
          {/* firstName inputunun zorunlu olduğunu ve hangi durumlarda validate edebileceğini regex ile belirledim. */}
          <input
            {...register("firstName", {
              required: true,
              pattern: /^[a-zA-Z]{2,}$/i,
            })}
            className={`shadow appearance-none border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {/* Burada ternary operator ile validasyon kontrolünün yanlış olması
          durumunda input'u kırmızı yaptım. */}

          {errors.firstName?.type === "required" && (
            <p className="text-red-500">Bu alan zorunludur</p>
          )}
          {errors.firstName?.type === "pattern" && (
            <p className="text-red-500">Lütfen doğru bir isim giriniz.</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Soyad
          </label>
          <input
            {...register("lastName", {
              required: true,
              pattern: /^[a-zA-Z]{2,}$/i,
            })}
            className={`shadow appearance-none border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red-500">Bu alan zorunludur</p>
          )}
          {errors.lastName?.type === "pattern" && (
            <p className="text-red-500">Lütfen geçerli bir soyad giriniz</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Telefon
          </label>
          {/* Yukarda oluşturduğumuz validate işlemini burada veriyorum. */}
          <InputMask
            mask="+90 999 999 99 99"
            {...register("phone", {
              required: true,
              pattern: /^\+90 \d{3} \d{3} \d{2} \d{2}$/i,
            })}
            className={`shadow appearance-none border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.phone?.type === "required" && (
            <p className="text-red-500">Bu alan zorunludur</p>
          )}
          {errors.phone?.type === "pattern" && (
            <p className="text-red-500">
              Lütfen geçerli bir telefon giriniz. Sadece +90 kodlu numaralar
              kabul edilir.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-posta
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Bu alan zorunludur</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500">Lütfen geçerli bir mail giriniz</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Şifre
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
            })}
            className={`shadow appearance-none border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Bu alan zorunludur</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Şifre en az 8 karakter olmalıdır.<br></br>
              En az bir büyük harf ve bir sayı içermelidir.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}
