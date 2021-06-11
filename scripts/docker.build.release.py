from os import system
from argparse import ArgumentParser

parser = ArgumentParser()

parser.add_argument('--tag',
                    default='nerdscomputing/hermes.cam:latest',
                    help='The tag for the new created docker image.')

parser.add_argument('--version',
                    default='2021.0.0',
                    help='The semantic version of the cam.')

args = parser.parse_args()

system(f'docker build -t {args.tag} -f dockerfile.release --build-arg VERSION={args.version} .')
