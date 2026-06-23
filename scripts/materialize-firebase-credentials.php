<?php

declare(strict_types=1);

$base64 = getenv('FIREBASE_CREDENTIALS_JSON_BASE64');
if ($base64 === false || trim($base64) === '') {
    fwrite(STDOUT, "[firebase-materialize] Missing FIREBASE_CREDENTIALS_JSON_BASE64, skipping credentials materialization\n");
    exit(0);
}

$decoded = base64_decode($base64, true);
if ($decoded === false) {
    fwrite(STDERR, "[firebase-materialize] Base64 decode failed\n");
    exit(2);
}

try {
    $json = json_decode($decoded, true, 512, JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    fwrite(STDERR, "[firebase-materialize] Decoded payload is not valid JSON\n");
    exit(3);
}

if (!is_array($json) || $json === []) {
    fwrite(STDERR, "[firebase-materialize] JSON payload is empty or invalid\n");
    exit(4);
}

$targetDir = __DIR__ . '/../storage/app/firebase';
$targetFile = $targetDir . '/credentials.json';

if (!is_dir($targetDir) && !mkdir($targetDir, 0775, true) && !is_dir($targetDir)) {
    fwrite(STDERR, "[firebase-materialize] Failed to create storage/app/firebase directory\n");
    exit(5);
}

$normalizedJson = json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
if ($normalizedJson === false) {
    fwrite(STDERR, "[firebase-materialize] Failed to normalize JSON\n");
    exit(6);
}

if (file_put_contents($targetFile, $normalizedJson . PHP_EOL) === false) {
    fwrite(STDERR, "[firebase-materialize] Failed to write credentials file\n");
    exit(7);
}

if (DIRECTORY_SEPARATOR === '/') {
    @chmod($targetFile, 0600);
}

fwrite(STDOUT, "[firebase-materialize] credentials.json written successfully\n");
exit(0);
