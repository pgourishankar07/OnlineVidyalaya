PGDMP          '                z            onlinevidya    14.3    14.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24584    onlinevidya    DATABASE     o   CREATE DATABASE onlinevidya WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE onlinevidya;
                postgres    false            �            1259    24585    student    TABLE     �   CREATE TABLE public.student (
    sno integer NOT NULL,
    name character varying(50) NOT NULL,
    phone bigint,
    email character varying,
    course character varying
);
    DROP TABLE public.student;
       public         heap    postgres    false            �          0    24585    student 
   TABLE DATA           B   COPY public.student (sno, name, phone, email, course) FROM stdin;
    public          postgres    false    209   �       \           2606    24591    student student_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (sno);
 >   ALTER TABLE ONLY public.student DROP CONSTRAINT student_pkey;
       public            postgres    false    209            �   �   x�MνN!��zx
��r�tg41&�hq��H�e"�4��pն���o&x�ȿo�erVf]�`��������х,a�/��hs�:&�����	�Q�e�Bi�u�����7��?��5�Ԙ캿�.�Iϫ>��;��\����U6�G!�_�g����eg���㎿:,��1��P���eVBN�;��Փ�?V��<0���Z\     