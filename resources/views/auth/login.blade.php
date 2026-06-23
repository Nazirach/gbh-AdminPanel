<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>GHALBIT MARITRONIX Admin</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    @yield('style')
    <style>
        :root {
            --mtx-bg: #06152b;
            --mtx-bg-deep: #04101f;
            --mtx-panel: rgba(7, 24, 45, 0.84);
            --mtx-panel-soft: rgba(10, 31, 57, 0.7);
            --mtx-border: rgba(69, 182, 255, 0.26);
            --mtx-border-strong: rgba(73, 205, 255, 0.45);
            --mtx-cyan: #37d6ff;
            --mtx-blue: #2f6bff;
            --mtx-text: #f3f8ff;
            --mtx-muted: #9cb9d6;
            --mtx-success: #7de6ff;
            --mtx-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
        }

        * {
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
            min-height: 100%;
            margin: 0;
            background:
                radial-gradient(circle at 18% 18%, rgba(45, 124, 255, 0.34), transparent 26%),
                radial-gradient(circle at 78% 12%, rgba(55, 214, 255, 0.18), transparent 18%),
                radial-gradient(circle at 65% 78%, rgba(47, 107, 255, 0.18), transparent 24%),
                linear-gradient(135deg, #031121 0%, #08234a 44%, #031a36 100%);
            color: var(--mtx-text);
            font-family: "Nunito", sans-serif;
        }

        body {
            overflow-x: hidden;
        }

        .maritronix-login {
            min-height: 100vh;
            height: 100vh;
            max-height: 100vh;
            padding: 18px 28px;
            position: relative;
            overflow: hidden;
        }

        .maritronix-login::before {
            content: "";
            position: fixed;
            inset: 0;
            background:
                linear-gradient(rgba(120, 220, 255, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(120, 220, 255, 0.06) 1px, transparent 1px);
            background-size: 54px 54px;
            opacity: 0.32;
            pointer-events: none;
        }

        .maritronix-shell {
            max-width: 1640px;
            height: calc(100vh - 36px);
            max-height: calc(100vh - 36px);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(360px, .85fr);
            align-items: center;
            gap: 28px;
            border: 1px solid rgba(73, 205, 255, 0.22);
            border-radius: 34px;
            overflow: hidden;
            position: relative;
            box-shadow: var(--mtx-shadow);
            background: rgba(2, 13, 28, 0.45);
            backdrop-filter: blur(12px);
        }

        .maritronix-hero {
            position: relative;
            padding: 28px 34px 22px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            max-height: calc(100vh - 36px);
            overflow: hidden;
            background:
                linear-gradient(180deg, rgba(4, 20, 43, 0.1) 0%, rgba(4, 20, 43, 0.74) 100%),
                radial-gradient(circle at 58% 34%, rgba(65, 178, 255, 0.18), transparent 16%),
                radial-gradient(circle at 28% 66%, rgba(55, 214, 255, 0.2), transparent 18%);
        }

        .maritronix-hero::after {
            content: "";
            position: absolute;
            inset: auto 0 0 0;
            height: 45%;
            background:
                radial-gradient(circle at 50% 0%, rgba(48, 160, 255, 0.28), transparent 34%),
                linear-gradient(180deg, rgba(18, 62, 110, 0.15), rgba(7, 25, 45, 0.94));
            pointer-events: none;
        }

        .maritronix-hero-top,
        .maritronix-hero-bottom,
        .maritronix-ocean-scene,
        .maritronix-login-panel {
            position: relative;
            z-index: 1;
        }

        .maritronix-brand {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 20px;
        }

        .maritronix-mark {
            width: 88px;
            height: 88px;
            flex: 0 0 88px;
            border-radius: 24px;
            position: relative;
            overflow: hidden;
            background:
                linear-gradient(165deg, rgba(255, 255, 255, 0.95), rgba(161, 231, 255, 0.75) 34%, rgba(34, 144, 255, 0.85) 74%, rgba(14, 55, 138, 0.9) 100%);
            clip-path: polygon(50% 0, 88% 15%, 88% 82%, 50% 100%, 12% 82%, 12% 15%);
            box-shadow:
                0 0 0 1px rgba(255,255,255,0.08),
                0 16px 42px rgba(22, 118, 255, 0.38);
        }

        .maritronix-mark img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .maritronix-mark::after {
            content: "";
            position: absolute;
            inset: 10px;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.22);
            clip-path: polygon(50% 0, 88% 15%, 88% 82%, 50% 100%, 12% 82%, 12% 15%);
        }

        .maritronix-brand-copy h1 {
            margin: 0;
            font-size: clamp(2.1rem, 3vw, 3.7rem);
            line-height: .92;
            letter-spacing: .08em;
            font-weight: 800;
        }

        .maritronix-brand-copy p {
            margin: 8px 0 0;
            font-size: clamp(.95rem, 1.12vw, 1.45rem);
            color: var(--mtx-success);
            letter-spacing: .02em;
        }

        .maritronix-kicker {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid rgba(73, 205, 255, 0.26);
            background: rgba(9, 30, 53, 0.56);
            color: var(--mtx-success);
            font-size: .82rem;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
        }

        .maritronix-kicker::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--mtx-cyan);
            box-shadow: 0 0 12px var(--mtx-cyan);
        }

        .maritronix-message {
            max-width: 640px;
            margin-top: 14px;
        }

        .maritronix-message h2 {
            margin: 0 0 8px;
            font-size: clamp(1.95rem, 3vw, 3rem);
            line-height: 1;
            font-weight: 800;
            text-transform: uppercase;
            max-width: 11ch;
        }

        .maritronix-message h3 {
            margin: 0 0 4px;
            color: var(--mtx-cyan);
            font-size: clamp(1.15rem, 1.55vw, 1.8rem);
            font-weight: 700;
        }

        .maritronix-message p {
            margin: 0;
            color: var(--mtx-text);
            font-size: clamp(.95rem, 1vw, 1.08rem);
        }

        .maritronix-ocean-scene {
            min-height: 260px;
            height: 260px;
            margin: 18px 0 16px;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(93, 206, 255, 0.18);
            background:
                radial-gradient(circle at 56% 18%, rgba(144, 224, 255, 0.9), transparent 12%),
                radial-gradient(circle at 20% 56%, rgba(49, 157, 255, 0.25), transparent 20%),
                linear-gradient(180deg, rgba(13, 44, 91, 0.3) 0%, rgba(10, 36, 76, 0.16) 36%, rgba(7, 21, 43, 0.1) 100%),
                linear-gradient(180deg, #0b2f61 0%, #0c3667 32%, #0a274d 56%, #07182f 100%);
            box-shadow: inset 0 -80px 120px rgba(2, 13, 28, 0.62);
        }

        .maritronix-ocean-scene::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 56% 18%, rgba(177, 240, 255, 0.95), transparent 7%),
                linear-gradient(180deg, transparent 0 46%, rgba(151, 223, 255, 0.06) 46% 48%, transparent 48% 100%),
                repeating-linear-gradient(90deg, transparent 0 11%, rgba(103, 201, 255, 0.08) 11% 11.4%, transparent 11.4% 21%);
            opacity: .78;
        }

        .maritronix-ocean-scene::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 44%;
            background:
                radial-gradient(circle at 16% 10%, rgba(80, 211, 255, 0.24), transparent 12%),
                radial-gradient(circle at 32% 44%, rgba(80, 211, 255, 0.18), transparent 10%),
                radial-gradient(circle at 68% 28%, rgba(80, 211, 255, 0.2), transparent 10%),
                linear-gradient(180deg, rgba(34, 125, 214, 0.24), rgba(6, 26, 47, 0.95));
            opacity: .9;
        }

        .scene-label {
            position: absolute;
            padding: 10px 12px;
            border-radius: 14px;
            background: rgba(7, 26, 48, 0.88);
            border: 1px solid rgba(65, 201, 255, 0.32);
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(10px);
        }

        .scene-label strong {
            display: block;
            font-size: .84rem;
            line-height: 1.1;
        }

        .scene-label span {
            display: block;
            margin-top: 4px;
            color: var(--mtx-muted);
            font-size: .74rem;
            line-height: 1.3;
        }

        .scene-label.command {
            left: 28px;
            top: 118px;
        }

        .scene-label.drone {
            right: 38px;
            bottom: 28px;
        }

        .scene-label.integration {
            right: 42px;
            top: 138px;
        }

        .scene-label.satellite {
            right: 96px;
            top: 40px;
        }

        .maritronix-vessel {
            position: absolute;
            bottom: 16px;
            left: 18%;
            width: 31%;
            aspect-ratio: 2.3 / 1;
            transform: rotate(-7deg);
            background: linear-gradient(180deg, #163f72 0%, #102f57 26%, #081a30 100%);
            clip-path: polygon(6% 78%, 38% 64%, 86% 58%, 100% 64%, 80% 90%, 18% 94%);
            box-shadow: 0 30px 60px rgba(1, 7, 18, 0.65);
        }

        .maritronix-vessel::before {
            content: "";
            position: absolute;
            left: 22%;
            bottom: 52%;
            width: 28%;
            height: 28%;
            background: linear-gradient(180deg, #244e82, #0b2039);
            clip-path: polygon(18% 100%, 30% 0, 76% 0, 88% 100%);
        }

        .maritronix-vessel::after {
            content: "GHALBIT MARITRONIX";
            position: absolute;
            left: 34%;
            bottom: 16%;
            color: rgba(189, 236, 255, 0.84);
            font-size: .72rem;
            letter-spacing: .08em;
            font-weight: 700;
        }

        .maritronix-drone,
        .maritronix-drone::before,
        .maritronix-drone::after {
            position: absolute;
            border-radius: 999px;
        }

        .maritronix-drone {
            width: 60px;
            height: 18px;
            background: rgba(8, 18, 30, 0.78);
            top: 96px;
            left: 52%;
            box-shadow: 0 0 18px rgba(75, 196, 255, 0.25);
        }

        .maritronix-drone::before,
        .maritronix-drone::after {
            content: "";
            width: 16px;
            height: 16px;
            top: -16px;
            background: rgba(45, 186, 255, 0.18);
            border: 2px solid rgba(86, 220, 255, 0.44);
        }

        .maritronix-drone::before {
            left: 4px;
        }

        .maritronix-drone::after {
            right: 4px;
        }

        .maritronix-drone.small-a {
            width: 54px;
            left: 44%;
            top: 148px;
            transform: scale(.82);
        }

        .maritronix-drone.small-b {
            width: 58px;
            left: 66%;
            top: 138px;
            transform: scale(.88);
        }

        .maritronix-drone.small-c {
            width: 60px;
            left: 58%;
            top: 186px;
            transform: scale(.92);
        }

        .maritronix-features {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
            padding: 12px;
            border-radius: 28px;
            border: 1px solid rgba(73, 205, 255, 0.18);
            background: rgba(7, 24, 45, 0.7);
            backdrop-filter: blur(12px);
        }

        .maritronix-feature {
            min-height: 108px;
            padding: 12px 12px 10px;
            border-radius: 20px;
            border: 1px solid rgba(73, 205, 255, 0.12);
            background: rgba(255, 255, 255, 0.02);
        }

        .maritronix-feature-badge {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            margin-bottom: 8px;
            font-size: 1.05rem;
            color: var(--mtx-cyan);
            background: rgba(42, 179, 255, 0.12);
            border: 1px solid rgba(73, 205, 255, 0.22);
            box-shadow: inset 0 0 18px rgba(49, 160, 255, 0.08);
        }

        .maritronix-feature h4 {
            margin: 0 0 6px;
            font-size: .92rem;
            font-weight: 800;
        }

        .maritronix-feature p {
            margin: 0;
            font-size: .78rem;
            line-height: 1.42;
            color: var(--mtx-muted);
        }

        .maritronix-footer {
            margin-top: 12px;
            text-align: center;
            color: rgba(198, 224, 255, 0.64);
            font-size: .78rem;
            letter-spacing: .02em;
        }

        .maritronix-login-panel {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 26px;
            height: 100%;
            max-height: calc(100vh - 36px);
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 0%, rgba(43, 148, 255, 0.18), transparent 24%),
                linear-gradient(180deg, rgba(3, 12, 26, 0.82), rgba(3, 12, 26, 0.94));
        }

        .maritronix-login-card {
            width: 100%;
            max-width: 440px;
            padding: 30px 28px 24px;
            border-radius: 30px;
            border: 1px solid var(--mtx-border);
            background: linear-gradient(180deg, rgba(4, 22, 44, 0.92), rgba(6, 18, 34, 0.94));
            box-shadow: var(--mtx-shadow);
            backdrop-filter: blur(14px);
            margin: auto;
        }

        .maritronix-login-brand {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 20px;
        }

        .maritronix-login-brand .maritronix-mark {
            width: 64px;
            height: 64px;
            flex-basis: 64px;
            border-radius: 20px;
        }

        .maritronix-login-brand .maritronix-mark::before {
            font-size: 42px;
        }

        .maritronix-login-brand h2 {
            margin: 0;
            font-size: 1.55rem;
            letter-spacing: .06em;
            font-weight: 800;
        }

        .maritronix-login-brand p {
            margin: 6px 0 0;
            color: var(--mtx-success);
            font-size: .82rem;
        }

        .maritronix-login-copy {
            margin-bottom: 14px;
        }

        .maritronix-login-copy h3 {
            margin: 0 0 8px;
            font-size: 1.95rem;
            font-weight: 800;
        }

        .maritronix-login-copy p {
            margin: 0;
            color: var(--mtx-muted);
            font-size: .92rem;
        }

        .maritronix-alert {
            margin-bottom: 12px;
            padding: 10px 14px;
            border-radius: 16px;
            border: 1px solid rgba(255, 104, 104, 0.32);
            background: rgba(118, 24, 37, 0.24);
            color: #ffd8df;
        }

        .maritronix-field {
            margin-bottom: 14px;
        }

        .maritronix-field label {
            display: block;
            margin-bottom: 8px;
            color: rgba(235, 244, 255, 0.92);
            font-size: .9rem;
            font-weight: 700;
        }

        .maritronix-input-wrap {
            position: relative;
        }

        .maritronix-input-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(129, 202, 255, 0.82);
            font-size: 1rem;
            pointer-events: none;
        }

        .maritronix-input {
            width: 100%;
            min-height: 54px;
            border-radius: 16px;
            border: 1px solid rgba(74, 174, 255, 0.22);
            background: rgba(11, 33, 60, 0.72);
            color: var(--mtx-text);
            padding: 0 52px 0 44px;
            font-size: .96rem;
            transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
        }

        .maritronix-input::placeholder {
            color: rgba(162, 191, 221, 0.72);
        }

        .maritronix-input:focus {
            outline: none;
            border-color: var(--mtx-border-strong);
            box-shadow: 0 0 0 4px rgba(56, 168, 255, 0.12);
            background: rgba(10, 32, 58, 0.95);
        }

        .maritronix-password-toggle {
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
            background: transparent;
            color: rgba(150, 188, 224, 0.9);
            font-size: .84rem;
            font-weight: 700;
            cursor: pointer;
            padding: 4px 8px;
        }

        .maritronix-password-toggle:focus {
            outline: none;
            color: var(--mtx-cyan);
        }

        .maritronix-invalid {
            display: block;
            margin-top: 8px;
            color: #ffb5c0;
            font-size: .88rem;
        }

        .maritronix-remember {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin: 6px 0 14px;
        }

        .maritronix-check {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: rgba(227, 240, 255, 0.88);
            font-weight: 700;
            margin: 0;
        }

        .maritronix-check input {
            width: 18px;
            height: 18px;
            accent-color: #2fa2ff;
        }

        .maritronix-submit {
            width: 100%;
            min-height: 54px;
            border: 0;
            border-radius: 18px;
            background: linear-gradient(90deg, #2f4fff 0%, #1f89ff 50%, #1bc0ff 100%);
            color: #fdfefe;
            font-size: 1.02rem;
            font-weight: 900;
            letter-spacing: .04em;
            text-transform: uppercase;
            box-shadow: 0 18px 34px rgba(33, 125, 255, 0.34);
            transition: transform .2s ease, box-shadow .2s ease;
        }

        .maritronix-submit:hover,
        .maritronix-submit:focus {
            transform: translateY(-1px);
            box-shadow: 0 20px 38px rgba(33, 125, 255, 0.44);
            color: #fff;
        }

        .maritronix-note {
            margin-top: 16px;
            padding: 14px 16px;
            border-radius: 20px;
            border: 1px solid rgba(68, 177, 255, 0.18);
            background: rgba(8, 28, 49, 0.82);
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .maritronix-note-icon {
            width: 46px;
            height: 46px;
            flex: 0 0 46px;
            border-radius: 18px;
            display: grid;
            place-items: center;
            color: var(--mtx-cyan);
            background: radial-gradient(circle at 50% 50%, rgba(55, 214, 255, 0.18), rgba(55, 214, 255, 0.04));
            border: 1px solid rgba(73, 205, 255, 0.22);
            font-size: 1.18rem;
        }

        .maritronix-note h4 {
            margin: 0 0 6px;
            font-size: .94rem;
            font-weight: 800;
        }

        .maritronix-note p {
            margin: 0;
            color: var(--mtx-muted);
            font-size: .86rem;
            line-height: 1.5;
        }

        @media (max-width: 1280px) {
            .maritronix-shell {
                grid-template-columns: minmax(0, 1.05fr) minmax(330px, .9fr);
            }

            .maritronix-features {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (min-width: 992px) {
            body {
                overflow: hidden;
            }
        }

        @media (max-width: 991.98px) {
            .maritronix-login {
                height: auto;
                max-height: none;
                padding: 14px;
                overflow-y: auto;
            }

            .maritronix-shell {
                min-height: auto;
                height: auto;
                max-height: none;
                grid-template-columns: 1fr;
                border-radius: 28px;
            }

            .maritronix-hero {
                min-height: auto;
                height: auto;
                max-height: none;
                padding: 28px 20px 22px;
                overflow: visible;
            }

            .maritronix-login-panel {
                padding: 20px;
                height: auto;
                max-height: none;
                overflow: visible;
            }

            .maritronix-message h2 {
                max-width: none;
            }

            .maritronix-ocean-scene {
                min-height: 300px;
                height: 300px;
            }

            .maritronix-vessel {
                width: 56%;
                left: 10%;
            }
        }

        @media (max-width: 767.98px) {
            .maritronix-brand {
                align-items: flex-start;
                gap: 14px;
                margin-bottom: 26px;
            }

            .maritronix-mark {
                width: 86px;
                height: 86px;
                flex-basis: 86px;
            }

            .maritronix-mark::before {
                font-size: 48px;
            }

            .maritronix-features {
                grid-template-columns: 1fr;
            }

            .scene-label {
                transform: scale(.92);
                transform-origin: left top;
            }

            .scene-label.integration {
                right: 18px;
            }

            .scene-label.satellite {
                right: 24px;
            }

            .maritronix-login-card {
                padding: 24px 18px 22px;
                border-radius: 26px;
            }

            .maritronix-login-copy h3 {
                font-size: 1.9rem;
            }

            .maritronix-note {
                padding: 16px;
            }
        }
    </style>
</head>

<body>
    <section class="maritronix-login">
        <div class="maritronix-shell">
            <div class="maritronix-hero">
                <div class="maritronix-hero-top">
                    <div class="maritronix-brand">
                        <div class="maritronix-mark" aria-hidden="true">
                            <img src="{{ asset('images/ghalbit-maritronix-icon.svg') }}" alt="GHALBIT MARITRONIX icon">
                        </div>
                        <div class="maritronix-brand-copy">
                            <h1>GHALBIT MARITRONIX</h1>
                            <p>Integrated Maritime &amp; Land Intelligence Platform</p>
                        </div>
                    </div>

                    <span class="maritronix-kicker">Integrated Maritime Control</span>

                    <div class="maritronix-message">
                        <h2>KEKUATAN LAUT UNTUK MASA DEPAN</h2>
                        <h3>Transportasi Dron Laut</h3>
                        <p>Cerdas &middot; Terintegrasi &middot; Terhubung</p>
                    </div>
                </div>

                <div class="maritronix-ocean-scene" aria-hidden="true">
                    <div class="scene-label satellite">
                        <strong>SATELIT KOMUNIKASI</strong>
                        <span>Pemantauan jaringan maritim real-time</span>
                    </div>
                    <div class="scene-label command">
                        <strong>DARAT</strong>
                        <span>Command center dan integrasi operasional</span>
                    </div>
                    <div class="scene-label integration">
                        <strong>INTEGRASI</strong>
                        <span>Laut &amp; darat dalam satu sistem</span>
                    </div>
                    <div class="scene-label drone">
                        <strong>DRON LAUT</strong>
                        <span>Transportasi, patroli, dan monitoring</span>
                    </div>

                    <div class="maritronix-drone"></div>
                    <div class="maritronix-drone small-a"></div>
                    <div class="maritronix-drone small-b"></div>
                    <div class="maritronix-drone small-c"></div>
                    <div class="maritronix-vessel"></div>
                </div>

                <div class="maritronix-hero-bottom">
                    <div class="maritronix-features">
                        <div class="maritronix-feature">
                            <div class="maritronix-feature-badge">⚓</div>
                            <h4>Kekuatan Laut</h4>
                            <p>Operasi cerdas, tangguh, dan berdaulat untuk kebutuhan maritim modern.</p>
                        </div>
                        <div class="maritronix-feature">
                            <div class="maritronix-feature-badge">🚤</div>
                            <h4>Transportasi Dron Laut</h4>
                            <p>Pengiriman cepat, aman, dan efisien untuk jalur laut masa depan.</p>
                        </div>
                        <div class="maritronix-feature">
                            <div class="maritronix-feature-badge">◎</div>
                            <h4>Integrasi Laut &amp; Darat</h4>
                            <p>Data real-time, komando terhubung, dan koordinasi lintas wilayah.</p>
                        </div>
                        <div class="maritronix-feature">
                            <div class="maritronix-feature-badge">AI</div>
                            <h4>Sistem Masa Depan</h4>
                            <p>Terhubung. Terintegrasi. Tangguh. Dirancang untuk operasi generasi berikutnya.</p>
                        </div>
                    </div>
                    <div class="maritronix-footer">&copy; 2026 GHALBIT MARITRONIX. All rights reserved.</div>
                </div>
            </div>

            <div class="maritronix-login-panel">
                <div class="maritronix-login-card">
                    <div class="maritronix-login-brand">
                        <div class="maritronix-mark" aria-hidden="true">
                            <img src="{{ asset('images/ghalbit-maritronix-icon.svg') }}" alt="GHALBIT MARITRONIX icon">
                        </div>
                        <div>
                            <h2>GHALBIT MARITRONIX</h2>
                            <p>Integrated Maritime &amp; Land Intelligence Platform</p>
                        </div>
                    </div>

                    <div class="maritronix-login-copy">
                        <h3>Login Admin</h3>
                        <p>Masuk ke panel Anda untuk melanjutkan.</p>
                    </div>

                    @if (count($errors) > 0)
                        @foreach ($errors->all() as $message)
                            <div class="maritronix-alert">{{ $message }}</div>
                        @endforeach
                    @endif

                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="maritronix-field">
                            <label for="email">{{ __('Email Address') }}</label>
                            <div class="maritronix-input-wrap">
                                <span class="maritronix-input-icon">@</span>
                                <input id="email" type="email" name="email"
                                    class="maritronix-input @error('email') is-invalid @enderror"
                                    placeholder="{{ __('Email Address') }}" value="{{ old('email') }}" required
                                    autocomplete="email" autofocus>
                            </div>
                            @error('email')
                                <span class="maritronix-invalid"><strong>{{ $message }}</strong></span>
                            @enderror
                        </div>

                        <div class="maritronix-field">
                            <label for="password">{{ __('Password') }}</label>
                            <div class="maritronix-input-wrap">
                                <span class="maritronix-input-icon">#</span>
                                <input id="password" type="password" name="password"
                                    class="maritronix-input @error('password') is-invalid @enderror"
                                    placeholder="{{ __('Password') }}" required autocomplete="current-password">
                                <button class="maritronix-password-toggle password-toggle-icon" type="button"
                                    aria-label="Toggle password visibility">
                                    <span id="togglePasswordIcon">Lihat</span>
                                </button>
                            </div>
                            @error('password')
                                <span class="maritronix-invalid"><strong>{{ $message }}</strong></span>
                            @enderror
                        </div>

                        <div class="maritronix-remember">
                            <label class="maritronix-check" for="remember">
                                <input type="checkbox" name="remember" id="remember"
                                    {{ old('remember') ? 'checked' : '' }}>
                                <span>{{ __('Remember Me') }}</span>
                            </label>
                        </div>

                        <button type="submit" class="maritronix-submit">{{ __('Login') }}</button>
                    </form>

                    <div class="maritronix-note">
                        <div class="maritronix-note-icon">◎</div>
                        <div>
                            <h4>Terhubung. Terintegrasi. Tangguh.</h4>
                            <p>Laut dan darat dalam satu jaringan masa depan. GHALBIT MARITRONIX menghubungkan operasi cerdas, cepat, dan siap generasi berikutnya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="{{ asset('assets/plugins/jquery/jquery.min.js') }}"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
    <script src="{{ asset('js/crypto-js.js') }}"></script>
    <script src="{{ asset('js/jquery.cookie.js') }}"></script>
    <script src="{{ asset('js/jquery.validate.js') }}"></script>

    <script type="text/javascript">
        var database = firebase.firestore();

        $(document).ready(function() {

            database.collection('settings').doc("globalSettings").get().then(async function(snapshots) {
                var globalSettings = snapshots.data();
                admin_panel_color = globalSettings.admin_panel_color;
                setCookie('admin_panel_color', admin_panel_color, 365);
                $('.login-register').css({
                    'background-color': admin_panel_color
                });
            })

            database.collection('sections').where('isActive', '==', true).orderBy('order').get().then(async function(snapshots) {
                const firstSection = snapshots.docs[0].data();
                const firstSectionId = snapshots.docs[0].id;
                const firstServiceType = firstSection.serviceTypeFlag;
                setCookie('section_id', firstSectionId, 1);
                setCookie('service_type', firstServiceType, 1);
            });
        });

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        $(document).ready(function() {
            const label = $('#togglePasswordIcon');
            $('.password-toggle-icon').on('click', function() {
                const passwordField = $('#password');

                if (passwordField.attr('type') === 'password') {
                    passwordField.attr('type', 'text');
                    label.text('Sembunyikan');
                } else {
                    passwordField.attr('type', 'password');
                    label.text('Lihat');
                }
            });
        });
    </script>

</body>

</html>
