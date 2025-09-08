#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="/tmp/contact_send.log"
ARCHIVE_DIR="/tmp/contact_logs"
MAX_ARCHIVES=7

mkdir -p "$ARCHIVE_DIR"

if [ ! -f "$LOG_FILE" ]; then
  echo "No log file to rotate"
  exit 0
fi

TIMESTAMP=$(date -u +"%Y%m%dT%H%M%SZ")
ARCHIVE="$ARCHIVE_DIR/contact_send.$TIMESTAMP.log"

mv "$LOG_FILE" "$ARCHIVE"
gzip -9 "$ARCHIVE"

# remove old archives beyond MAX_ARCHIVES
ls -1t "$ARCHIVE_DIR"/contact_send.*.log.gz 2>/dev/null | tail -n +$((MAX_ARCHIVES+1)) | xargs -r rm --

echo "Rotated to $ARCHIVE.gz"


