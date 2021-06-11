from os import system
from argparse import ArgumentParser

parser = ArgumentParser()

parser.add_argument('--tag',
                    default='nerdscomputing/hermes.cam:from',
                    help='The tag for the new created docker image.')

args = parser.parse_args()

system(f'docker build -t {args.tag} -f dockerfile.from .')
