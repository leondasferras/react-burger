import styles from "./OrderInfo.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderInfo = () => {
  return (
    <div className={`${styles.orderInfo}`}>
      <p
        className={`${styles.orderNumber} text text_type_digits-default mb-10`}
      >
        #034533
      </p>
      <p className="text text_type_main-large mb-3">
        Black Hole Singularity острый бургер
      </p>
      <p className={`${styles.orderStatus} text text_type_main-default mb-15`}>
        Выполнен
      </p>
      <p
        className={`${styles.orderCompositionHeader} text text_type_main-large mb-6`}
      >
        Состав:
      </p>
      <ul className={`${styles.orderComposition} mb-10`}>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>{" "}
        <li className={`${styles.listItem}`}>
          <div className={`${styles.iconAndNameWrapper}`}>
            <div className={`${styles.ingredientImage} mr-4`}>
              <img
                className={`${styles.image}`}
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
              ></img>
            </div>
            <p
              className={`${styles.ingredientName}text text_type_main-default`}
            >
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <p className={`${styles.price} text text_type_digits-default`}>
            2 x 20
            <CurrencyIcon className="ml-10" type="primary" />
          </p>
        </li>
      </ul>
      <div className={`${styles.dataAndFinalPrice} `}>
        <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
        <p className={`${styles.finalPrice} text text_type_digits-default`}>
          20
          <CurrencyIcon className="ml-10" type="primary" />
        </p>
      </div>
    </div>
  );
};
