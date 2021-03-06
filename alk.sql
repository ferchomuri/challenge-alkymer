PGDMP     2                     x            store    12.4    12.4 3    @           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            A           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            B           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            C           1262    16393    store    DATABASE     �   CREATE DATABASE store WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Ecuador.1252' LC_CTYPE = 'Spanish_Ecuador.1252';
    DROP DATABASE store;
                postgres    false            �            1259    16488    app    TABLE     �   CREATE TABLE public.app (
    id_app integer NOT NULL,
    name_app character varying(50) NOT NULL,
    image character varying(250),
    id_category integer,
    price_app double precision
);
    DROP TABLE public.app;
       public         heap    postgres    false            �            1259    16486    app_id_app_seq    SEQUENCE     �   CREATE SEQUENCE public.app_id_app_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.app_id_app_seq;
       public          postgres    false    209            D           0    0    app_id_app_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.app_id_app_seq OWNED BY public.app.id_app;
          public          postgres    false    208            �            1259    16509    cart    TABLE     l   CREATE TABLE public.cart (
    id_cart integer NOT NULL,
    id_user integer,
    price double precision
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    16507    cart_id_cart_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_cart_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cart_id_cart_seq;
       public          postgres    false    213            E           0    0    cart_id_cart_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cart_id_cart_seq OWNED BY public.cart.id_cart;
          public          postgres    false    212            �            1259    16480    category    TABLE     �   CREATE TABLE public.category (
    id_category integer NOT NULL,
    name_category character varying(50) NOT NULL,
    description character varying(250) NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    16478    category_id_catergory_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_catergory_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.category_id_catergory_seq;
       public          postgres    false    207            F           0    0    category_id_catergory_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.category_id_catergory_seq OWNED BY public.category.id_category;
          public          postgres    false    206            �            1259    16501    detail_cart    TABLE     m   CREATE TABLE public.detail_cart (
    id_detail integer NOT NULL,
    id_app integer,
    id_cart integer
);
    DROP TABLE public.detail_cart;
       public         heap    postgres    false            �            1259    16499    detail_cart_id_detail_seq    SEQUENCE     �   CREATE SEQUENCE public.detail_cart_id_detail_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.detail_cart_id_detail_seq;
       public          postgres    false    211            G           0    0    detail_cart_id_detail_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.detail_cart_id_detail_seq OWNED BY public.detail_cart.id_detail;
          public          postgres    false    210            �            1259    16459    role    TABLE     i   CREATE TABLE public.role (
    id_role integer NOT NULL,
    name_role character varying(50) NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    16457    role_id_role_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_role_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.role_id_role_seq;
       public          postgres    false    203            H           0    0    role_id_role_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.role_id_role_seq OWNED BY public.role.id_role;
          public          postgres    false    202            �            1259    16467    user    TABLE     �   CREATE TABLE public."user" (
    id_user integer NOT NULL,
    namer_user character varying(50) NOT NULL,
    "user" character varying(10) NOT NULL,
    password character varying(10) NOT NULL,
    id_role integer
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16465    user_id_user_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_id_user_seq;
       public          postgres    false    205            I           0    0    user_id_user_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_id_user_seq OWNED BY public."user".id_user;
          public          postgres    false    204            �
           2604    16491 
   app id_app    DEFAULT     h   ALTER TABLE ONLY public.app ALTER COLUMN id_app SET DEFAULT nextval('public.app_id_app_seq'::regclass);
 9   ALTER TABLE public.app ALTER COLUMN id_app DROP DEFAULT;
       public          postgres    false    209    208    209            �
           2604    16512    cart id_cart    DEFAULT     l   ALTER TABLE ONLY public.cart ALTER COLUMN id_cart SET DEFAULT nextval('public.cart_id_cart_seq'::regclass);
 ;   ALTER TABLE public.cart ALTER COLUMN id_cart DROP DEFAULT;
       public          postgres    false    213    212    213            �
           2604    16483    category id_category    DEFAULT     }   ALTER TABLE ONLY public.category ALTER COLUMN id_category SET DEFAULT nextval('public.category_id_catergory_seq'::regclass);
 C   ALTER TABLE public.category ALTER COLUMN id_category DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16504    detail_cart id_detail    DEFAULT     ~   ALTER TABLE ONLY public.detail_cart ALTER COLUMN id_detail SET DEFAULT nextval('public.detail_cart_id_detail_seq'::regclass);
 D   ALTER TABLE public.detail_cart ALTER COLUMN id_detail DROP DEFAULT;
       public          postgres    false    210    211    211            �
           2604    16462    role id_role    DEFAULT     l   ALTER TABLE ONLY public.role ALTER COLUMN id_role SET DEFAULT nextval('public.role_id_role_seq'::regclass);
 ;   ALTER TABLE public.role ALTER COLUMN id_role DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    16470    user id_user    DEFAULT     n   ALTER TABLE ONLY public."user" ALTER COLUMN id_user SET DEFAULT nextval('public.user_id_user_seq'::regclass);
 =   ALTER TABLE public."user" ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    204    205    205            9          0    16488    app 
   TABLE DATA           N   COPY public.app (id_app, name_app, image, id_category, price_app) FROM stdin;
    public          postgres    false    209   [7       =          0    16509    cart 
   TABLE DATA           7   COPY public.cart (id_cart, id_user, price) FROM stdin;
    public          postgres    false    213   8       7          0    16480    category 
   TABLE DATA           K   COPY public.category (id_category, name_category, description) FROM stdin;
    public          postgres    false    207   08       ;          0    16501    detail_cart 
   TABLE DATA           A   COPY public.detail_cart (id_detail, id_app, id_cart) FROM stdin;
    public          postgres    false    211   H9       3          0    16459    role 
   TABLE DATA           2   COPY public.role (id_role, name_role) FROM stdin;
    public          postgres    false    203   l9       5          0    16467    user 
   TABLE DATA           P   COPY public."user" (id_user, namer_user, "user", password, id_role) FROM stdin;
    public          postgres    false    205   �9       J           0    0    app_id_app_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.app_id_app_seq', 15, true);
          public          postgres    false    208            K           0    0    cart_id_cart_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cart_id_cart_seq', 1, true);
          public          postgres    false    212            L           0    0    category_id_catergory_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.category_id_catergory_seq', 2, true);
          public          postgres    false    206            M           0    0    detail_cart_id_detail_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.detail_cart_id_detail_seq', 1, true);
          public          postgres    false    210            N           0    0    role_id_role_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.role_id_role_seq', 2, true);
          public          postgres    false    202            O           0    0    user_id_user_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_id_user_seq', 2, true);
          public          postgres    false    204            �
           2606    16493    app app_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.app
    ADD CONSTRAINT app_pkey PRIMARY KEY (id_app);
 6   ALTER TABLE ONLY public.app DROP CONSTRAINT app_pkey;
       public            postgres    false    209            �
           2606    16514    cart cart_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id_cart);
 8   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_pkey;
       public            postgres    false    213            �
           2606    16485    category category_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id_category);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    207            �
           2606    16506    detail_cart detail_cart_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.detail_cart
    ADD CONSTRAINT detail_cart_pkey PRIMARY KEY (id_detail);
 F   ALTER TABLE ONLY public.detail_cart DROP CONSTRAINT detail_cart_pkey;
       public            postgres    false    211            �
           2606    16464    role role_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id_role);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    203            �
           2606    16472    user user_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    205            �
           2606    16520    detail_cart fk_id_app    FK CONSTRAINT        ALTER TABLE ONLY public.detail_cart
    ADD CONSTRAINT fk_id_app FOREIGN KEY (id_app) REFERENCES public.app(id_app) NOT VALID;
 ?   ALTER TABLE ONLY public.detail_cart DROP CONSTRAINT fk_id_app;
       public          postgres    false    209    211    2730            �
           2606    16525    detail_cart fk_id_cart    FK CONSTRAINT     �   ALTER TABLE ONLY public.detail_cart
    ADD CONSTRAINT fk_id_cart FOREIGN KEY (id_cart) REFERENCES public.cart(id_cart) NOT VALID;
 @   ALTER TABLE ONLY public.detail_cart DROP CONSTRAINT fk_id_cart;
       public          postgres    false    211    213    2734            �
           2606    16494    app fk_id_category    FK CONSTRAINT     �   ALTER TABLE ONLY public.app
    ADD CONSTRAINT fk_id_category FOREIGN KEY (id_category) REFERENCES public.category(id_category) NOT VALID;
 <   ALTER TABLE ONLY public.app DROP CONSTRAINT fk_id_category;
       public          postgres    false    207    209    2728            �
           2606    16473    user fk_id_role    FK CONSTRAINT     t   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_id_role FOREIGN KEY (id_role) REFERENCES public.role(id_role);
 ;   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_id_role;
       public          postgres    false    203    2724    205            �
           2606    16515    cart fk_id_user    FK CONSTRAINT     ~   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES public."user"(id_user) NOT VALID;
 9   ALTER TABLE ONLY public.cart DROP CONSTRAINT fk_id_user;
       public          postgres    false    213    205    2726            9   �   x�m��
�@��{_1_ �hTی (�ܴyԳpRƱ��O$����r%�siCa��;/��;�D*�5��NTA�1$Դ]��|J��zߎq	E�n�
�l+���&({�!���fj�-9��q��fR���զ<o���k 1�5�ƶ��."~ �;V�      =      x�3�4������� ��      7     x�%PKN�@]7�x�"�@bK6f�v�x4vR��A�r=	���捞�����ܜ�,\���T�����#R&�[`L-�Zf)�M��1�"�<�fuEU���K1�s�e-��<s�ix<��>s7�|$]j���d�D����ɡ'ܮ?=��w�%���]G��Đ���<*{WK�5(�l�T��ޚ�m�s����{��Ģ�����!Z��rN���I�j��������B3���N�ec�3��q�n|Z�4�O�0�6
�;      ;      x�3���4����� ��      3   $   x�3�tL����,.)J,�/�2�-N-����� �g2      5   4   x�3�tK-�K�K��L�1��ML9��8}J3�9s@�����!�W� ���     